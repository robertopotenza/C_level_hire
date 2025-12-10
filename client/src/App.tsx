import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Vision from "./pages/Vision";
import Production from "@/pages/Production";
import WhatGoodLooksLike from "@/pages/WhatGoodLooksLike";
import Contact from "./pages/Contact";
import ChromaloxCaseStudy from "./pages/ChromaloxCaseStudy";
import Projects from "./pages/Projects";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/experience" component={Experience} />
      <Route path="/vision" component={Vision} />
      <Route path="/production" component={Production} />
      <Route path="/what-good-looks-like" component={WhatGoodLooksLike} />
      <Route path="/contact" component={Contact} />
      <Route path="/case-study/chromalox" component={ChromaloxCaseStudy} />
      <Route path="/projects" component={Projects} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
