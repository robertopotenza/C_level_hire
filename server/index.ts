import express from "express";
import { createServer } from "http";
import fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, "..");
const stateFilePath = path.resolve(projectRoot, "stockout-state.json");

const defaultState = {
  days: 42,
  maxDays: 100,
  message: "Disciplined planning keeps the floor moving and customers supported.",
  updatedAt: new Date().toISOString(),
};

async function readState() {
  try {
    const raw = await fs.readFile(stateFilePath, "utf8");
    const parsed = JSON.parse(raw);

    return {
      days: Number.isFinite(Number(parsed?.days)) ? Math.max(0, Math.floor(Number(parsed.days))) : defaultState.days,
      maxDays: Number.isFinite(Number(parsed?.maxDays))
        ? Math.max(1, Math.floor(Number(parsed.maxDays)))
        : defaultState.maxDays,
      message: typeof parsed?.message === "string" ? parsed.message : defaultState.message,
      updatedAt: typeof parsed?.updatedAt === "string" ? parsed.updatedAt : defaultState.updatedAt,
    };
  } catch (error) {
    console.warn("Falling back to default stockout state:", error);
    return defaultState;
  }
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(projectRoot, "dist", "public");

  app.get("/api/state", async (_req, res) => {
    const state = await readState();
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
    res.json(state);
  });

  app.use(express.static(staticPath, { extensions: ["html"] }));

  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
    console.log(`Stockout dashboard available at http://localhost:${port}/dashboard.html`);
  });
}

startServer().catch(console.error);
