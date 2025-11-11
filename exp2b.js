const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: true }));

// Session setup
app.use(session({
  secret: 'auth-secret',
  resave: false,
  saveUninitialized: true,
}));

// Dummy user database
const users = [
  { username: 'balaji', password: '1234' },
  { username: 'ravi', password: 'abcd' }
];

// Login page
app.get('/', (req, res) => {
  if (req.session.user) {
    res.send(`<h2>Welcome ${req.session.user.username}! ✅</h2>
              <a href="/logout">Logout</a>`);
  } else {
    res.send(`<form method="POST" action="/login">
                <input type="text" name="username" placeholder="Username" required/>
                <input type="password" name="password" placeholder="Password" required/>
                <button type="submit">Login</button>
              </form>`);
  }
});

// Handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const validUser = users.find(u => u.username === username && u.password === password);

  if (validUser) {
    req.session.user = validUser; // save in session
    res.redirect('/');
  } else {
    res.send('<h3>Invalid username or password ❌</h3><a href="/">Try again</a>');
  }
});

// Logout route
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

// Start server
app.listen(PORT, () => console.log(`Auth server running on http://localhost:${PORT}`));
