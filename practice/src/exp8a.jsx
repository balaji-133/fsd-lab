import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Import page components
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <h1>React Router Example 🌐</h1>

        {/* Navigation Links */}
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/" style={{ margin: "10px" }}>Home</Link>
          <Link to="/about" style={{ margin: "10px" }}>About</Link>
          <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// // Home.jsx
// import React from "react";

// function Home() {
//   return <h2>🏠 Welcome to the Home Page</h2>;
// }




// export default Home;

// // About.jsx
// import React from "react";

// function About() {
//   return <h2>ℹ️ This is the About Page</h2>;
// }




// export default About;

// // Contact.jsx
// import React from "react";

// function Contact() {
//   return <h2>📞 Contact Us at: react@demo.com</h2>;
// }

// export default Contact;
