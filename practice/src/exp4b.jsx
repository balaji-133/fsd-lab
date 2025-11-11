import React from 'react';

// Child Component
function ChildComponent(props) {
  return (
    <div style={{ backgroundColor: '#f0f0f0', margin: '20px', padding: '20px', borderRadius: '10px' }}>
      <h3>Child Component 👶</h3>
      <p>Received Data: <strong>{props.message}</strong></p>
    </div>
  );
}

// Parent Component
function ParentComponent() {
  const message = "Hello from Parent 👋";

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Parent Component 🧑‍💻</h2>
      <ChildComponent message={message} /> {/* Passing data as prop */}
    </div>
  );
}

export default ParentComponent;
