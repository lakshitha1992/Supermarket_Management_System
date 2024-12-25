import React, { useState } from 'react';
import { TextField, Button, Box, Typography, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './Dashboard'; // Import the Dashboard component

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to manage authentication

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if email and password match 'admin' and 'admin'
    if (email === 'admin@admin' && password === 'admin') {
      setIsAuthenticated(true); // Set the state to true if login is successful
    } else {
      alert('Invalid credentials'); // Alert if credentials are incorrect
    }
  };

  if (isAuthenticated) {
    return <Dashboard />; // If authenticated, render the Dashboard
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: '#f5f5f5',
      }}
    >
      <Box
        sx={{
          width: 400,
          p: 4,
          bgcolor: '#fff',
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" align="center" sx={{ mb: 2, color: '#4caf50' }}>
          Supermarket Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
            <IconButton disabled>
              <FontAwesomeIcon icon={faUser} style={{ color: '#4caf50' }} />
            </IconButton>
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
            <IconButton disabled>
              <FontAwesomeIcon icon={faLock} style={{ color: '#4caf50' }} />
            </IconButton>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            color="success"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default LoginForm;
