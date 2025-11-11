// server.js
const express = require('express');
const app = express();
const PORT = 3000;

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Express Routing Example!');
});

// Route with parameter
app.get('/user/:name', (req, res) => {
  const username = req.params.name;
  res.send(`Hello, ${username}! This is your profile page.`);
});

// Route with multiple parameters
app.get('/user/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.send(`User ${name} is ${age} years old.`);
});

// Route with query parameters
app.get('/search', (req, res) => {
  const { name, city } = req.query;
  res.send(`Search results for ${name} in ${city}`);
});

// URL building example
app.get('/redirect', (req, res) => {
  const newUrl = `/user/Balaji`;
  res.redirect(newUrl);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
 