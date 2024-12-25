import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';

const App = () => {
  // State to determine which component to show
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      {isAuthenticated ? <Dashboard /> : <LoginForm />}
    </div>
  );
};

export default App;
