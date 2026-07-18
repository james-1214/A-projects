import React, { useState } from 'react';
import { BookOpen, Code, Palette, Music, Camera, Users } from "lucide-react";

function Footer({ isDark }) {
  return (
    <footer className={`footer ${isDark ? 'dark' : 'light'}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h3>SkillSwap</h3>
          <p>Empowering people to learn and grow together through skill exchange</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#how">How It Works</a></li>
            <li><a href="#skills">Browse Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#stories">Success Stories</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="#facebook" className="social-icon">f</a>
            <a href="#twitter" className="social-icon">𝕏</a>
            <a href="#instagram" className="social-icon">📷</a>
            <a href="#linkedin" className="social-icon">in</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 SkillSwap. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer