// server.js
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 4000;

app.use(bodyParser.json());

// Dummy data (like fake database)
let users = [
  { id: 1, name: "Balaji", age: 21, city: "Visakhapatnam" },
  { id: 2, name: "Rahul", age: 23, city: "Hyderabad" },
  { id: 3, name: "Sita", age: 22, city: "Chennai" },
];

// ✅ GET - Retrieve all users
app.get("/users", (req, res) => {
  res.json({ message: "All users fetched", users });
});

// ✅ POST - Add a new user
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1; // auto generate ID
  users.push(newUser);
  res.status(201).json({ message: "New user added", users });
});

// ✅ PUT - Update user by ID
app.put("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedData = req.body;

  const user = users.find((u) => u.id === id);

  if (user) {
    user.name = updatedData.name || user.name;
    user.age = updatedData.age || user.age;
    user.city = updatedData.city || user.city;

    res.json({ message: `User with ID ${id} updated`, users });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// ✅ DELETE - Delete user by ID
app.delete("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    users.splice(index, 1);
    res.json({ message: `User with ID ${id} deleted`, users });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
