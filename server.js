const express = require("express");
const fs = require("fs");

const app = express();
const port = 3001;


// Serve static files (CSS, JS, images)
app.use(express.static("public"));

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});