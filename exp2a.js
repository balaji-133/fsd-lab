const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Configure session
app.use(session({
  secret: 'balaji-secret-key',  // secret key to sign session ID
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 10000 } // 1 minute
}));

// Home route
app.get('/', (req, res) => {
  if (req.session.username) {
    res.send(`<h2>Welcome back, ${req.session.username}! 🎉</h2>
              <a href="/logout">Logout</a>`);
  } else {
    res.send(`<form method="POST" action="/login">
                <input type="text" name="username" placeholder="Enter name" required />
                <button type="submit">Login</button>
              </form>`);
  }
});

// Login route
app.post('/login', (req, res) => {
  const { username } = req.body;
  req.session.username = username; // store username in session
  res.cookie('user', username); // store cookie
  res.redirect('/');
});

// Logout route
app.get('/logout', (req, res) => {
  res.clearCookie('user');
  req.session.destroy(() => {
    res.redirect('/');
  });
});

// Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
