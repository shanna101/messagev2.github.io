const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Route to serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});
