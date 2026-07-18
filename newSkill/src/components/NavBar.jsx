import React, { useState } from 'react';
import { BookOpen, Code, Palette, Music, Camera, Users } from "lucide-react";

function NavBar({ isDark, toggleTheme, navigateToLogin, navigateToSignup }) {
  return (
    <nav className={`navbar ${isDark ? 'dark' : 'light'}`}>
      <div className="nav-container">
        <div className="logo">SkillSwap</div>
        <div className="nav-right">
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDark ? '☀️' : '🌙'}
          </button>
          <div className="nav-buttons">
            <button className="btn-login" onClick={navigateToLogin}>Login</button>
            <button className="btn-signup" onClick={navigateToSignup}>Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar
