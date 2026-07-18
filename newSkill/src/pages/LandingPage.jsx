import React, { useState } from 'react';
import { BookOpen, Code, Palette, Music, Camera, Users } from "lucide-react";
import NavBar from ../

function LandingPage({ isDark, toggleTheme, navigateToLogin, navigateToSignup }) {
  return (
    <div className={`app ${isDark ? 'dark' : 'light'}`}>
      <NavBar 
        isDark={isDark} 
        toggleTheme={toggleTheme}
        navigateToLogin={navigateToLogin}
        navigateToSignup={navigateToSignup}
      />
      <Hero isDark={isDark} />
      <Media isDark={isDark} />
      <Types />
      <Timeline isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}

export default LandingPage
