// db.js
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb+srv://balajikundrapu0000:BalajiBalaji@cluster0.kwjcu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "❌ Connection error:"));
db.once("open", function () {
  console.log("✅ MongoDB connected successfully!");
});

module.exports = db;
