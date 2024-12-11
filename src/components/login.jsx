import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Both fields are required');
      return;
    }

    try {
      const response = await axios.post('https://backend-dxkf.onrender.com/api/login', {
        username,
        password,
      });

      if (response.status === 200) {
        alert(response.data.message); // Show success message
        setError('');
        navigate('/shoplist'); // Redirect to ShopList on success
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      setError('Both fields are required');
    } else {
      try {
        const response = await axios.post('https://backend-dxkf.onrender.com/api/signup', {
          username,
          password,
        });
        alert(response.data.message);
        setError('');
        setIsSignup(false); // Switch to login after successful signup
      } catch (err) {
        setError(err.response?.data?.error || 'Signup failed');
      }
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">{isSignup ? 'Sign Up' : 'Login'}</h2>
      <form onSubmit={isSignup ? handleSignup : handleLogin} className="login-form">
        <div className="input-group">
          <label className="login-label">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="login-input"
          />
        </div>
        <div className="input-group">
          <label className="login-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="login-input"
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="login-button">
          {isSignup ? 'Sign Up' : 'Login'}
        </button>
      </form>
      <p className="switch-text">
        {isSignup ? "Already have an account?" : "Don't have an account?"}{' '}
        <button onClick={() => setIsSignup(!isSignup)} className="switch-button">
          {isSignup ? 'Login' : 'Sign Up'}
        </button>
      </p>
    </div>
  );
};

export default Login;
