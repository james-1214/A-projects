import React from 'react'
import '../styles/LoginRD.css'

function LoginRegister() {
  const [currentPage, setCurrentPage] = useState('login');
  const [user, setUser] = useState(null);

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
    setCurrentPage('login');
  };

  const switchToRegister = () => {
    setCurrentPage('register');
  };

  const switchToLogin = () => {
    setCurrentPage('login');
  };

  return (
    <>      
      {currentPage === 'login' && (
        <Login onLogin={handleLogin} onSwitchToRegister={switchToRegister} />
      )}
      {currentPage === 'register' && (
        <Register onRegister={handleRegister} onSwitchToLogin={switchToLogin} />
      )}
      {currentPage === 'dashboard' && (
        <Dashboard user={user} onLogout={handleLogout} />
      )}
    </>
  );
}
export default LoginRegister;