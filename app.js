const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Sample JSON API endpoint
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello, world!", status: "success" });
});

// Home route
app.get("/", (req, res) => {
  res.send(
    '<h1>Welcome to My Node.js App</h1><p>Visit <a href="/api/data">/api/data</a> for JSON data.</p>'
  );
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
