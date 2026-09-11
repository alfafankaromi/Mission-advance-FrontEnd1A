import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HalamanBeranda from './pages/HalamanBeranda';
import HalamanLogin from './pages/HalamanLogin';
import HalamanRegister from './pages/HalamanRegister';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <HalamanBeranda
            userLoggedIn={isLoggedIn}
            onLogout={handleLogout}
          />
        }
      />
      <Route
        path="/login"
        element={
          <HalamanLogin onLoginSuccess={handleLoginSuccess} />
        }
      />
      <Route
        path="/register"
        element={
          <HalamanRegister onRegisterSuccess={() => {}} />
        }
      />
    </Routes>
  );
}
