const express = require('express');
const app = express();
const PORT = 3000;

// set EJS as view engine
app.set('view engine', 'ejs');

// route for homepage
app.get('/', (req, res) => {
  const student = { name: 'Balaji', course: 'MERN Stack', city: 'Vizag' };
  res.render('exp6a', { student });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
