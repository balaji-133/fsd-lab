const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Display form page
app.get('/form', (req, res) => {
  res.render('exp6b_form');
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { name, email, city } = req.body;
  res.render('exp6b_result', { name, email, city });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
