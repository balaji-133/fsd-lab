import React, { useState } from 'react';

function ConditionalRender() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {isLoggedIn ? (
        <h2>Welcome back, Balaji! 👋</h2>
      ) : (
        <h2>Please log in to continue 🔒</h2>
      )}

      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: 'teal',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
}

export default ConditionalRender;
