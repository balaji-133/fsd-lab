import React, { useState } from "react";

function UpdateScreen() {
  const [message, setMessage] = useState("Welcome to React Hooks!");

  const changeMessage = () => {
    setMessage("Screen Updated Successfully! 🎉");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{message}</h2>
      <button
        onClick={changeMessage}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "teal",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Update Screen
      </button>
    </div>
  );
}

export default UpdateScreen;
