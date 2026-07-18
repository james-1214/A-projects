import React, { useState } from 'react';
import { BookOpen, Code, Palette, Music, Camera, Users } from "lucide-react";

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isDark, setIsDark] = useState(true);
  const [user, setUser] = useState(null);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const navigateToLogin = () => {
    setCurrentPage('login');
  };

  const navigateToSignup = () => {
    setCurrentPage('register');
  };

  const navigateToLanding = () => {
    setCurrentPage('landing');
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const handleRegister = (userData) => {
    setUser(userData);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('landing');
  };

  return (
    <>
      {currentPage === 'landing' && (
        <LandingPage 
          isDark={isDark} 
          toggleTheme={toggleTheme}
          navigateToLogin={navigateToLogin}
          navigateToSignup={navigateToSignup}
        />
      )}
      {currentPage === 'login' && (
        <Login 
          onLogin={handleLogin} 
          onSwitchToRegister={navigateToSignup}
          onBack={navigateToLanding}
        />
      )}
      {currentPage === 'register' && (
        <Register 
          onRegister={handleRegister} 
          onSwitchToLogin={navigateToLogin}
          onBack={navigateToLanding}
        />
      )}
      {currentPage === 'dashboard' && (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </>
  );
}

export default App