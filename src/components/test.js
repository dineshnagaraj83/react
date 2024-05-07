import React, { useState, useEffect } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you can add your authentication logic
    // For simplicity, let's just check if both fields are filled
    if (username && password) {
      // Assuming authentication is successful
      onLogin(username);
    } else {
      alert('Please enter username and password.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    // Assuming logout logic clears local storage
    localStorage.removeItem('username');
    onLogout();
  };

  return (
    <div>
      <h2>Welcome, {localStorage.getItem('username')}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (username) => {
    // Store username in local storage upon successful login
    localStorage.setItem('username', username);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? (
        <Logout onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
