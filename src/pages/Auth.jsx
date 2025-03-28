import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Auth = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate('/');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login to BookHaven</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit">Login</button>
      </form>

      <div className="login-hint">
        <h3>Test Credentials:</h3>
        <p><strong>Email:</strong> user1@example.com</p>
        <p><strong>Password:</strong> password123</p>
        <p>OR</p>
        <p><strong>Email:</strong> user2@example.com</p>
        <p><strong>Password:</strong> securepass</p>
      </div>
    </div>
  );
};

export default Auth;
