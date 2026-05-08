require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const distDir = path.join(__dirname, 'dist', 'client');

let indexHtml = null;
try {
  const fs = require('fs');
  indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
} catch (e) {
  console.warn('Could not read index.html at startup, fallback to sendFile per-request');
}

app.use(express.static(distDir));

// Serve index.html and inject GOOGLE_MAPS_API_KEY as a runtime global
app.use((req, res) => {
  const key = process.env.GOOGLE_MAPS_API_KEY || '';
  if (indexHtml) {
    const inject = `<script>window.__GOOGLE_MAPS_API_KEY = ${JSON.stringify(key)};</script>`;
    const html = indexHtml.replace('</head>', `${inject}</head>`);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.send(html);
  }
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
