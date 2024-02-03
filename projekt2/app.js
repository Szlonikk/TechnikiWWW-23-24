const express = require('express');
const app = express();
const path = require('path');

// Serve static files from specified directories
app.use(express.static('view')); // assuming your CSS and JS files are in a 'public' directory

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // serve your HTML file
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

