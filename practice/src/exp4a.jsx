import React, { useState } from 'react';

function UseStateExample() {
  // useState Hook - creates a state variable "count"
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>React useState Hook Example ⚡</h2>
      <p>Current Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 20px',
          backgroundColor: 'teal',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default UseStateExample;
