// Minimal Express app to test Railway deployment
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  console.log('Health check received');
  res.status(200).send('OK');
});

app.get('/', (req, res) => {
  console.log('Root request received');
  res.send('Hello Railway - Minimal Test');
});

app.get('/test', (req, res) => {
  console.log('Test request received');
  res.json({ 
    message: 'Test successful', 
    timestamp: new Date().toISOString(),
    port: PORT
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Minimal test server running on port ${PORT}`);
  console.log(`🔗 Binding: 0.0.0.0:${PORT}`);
});