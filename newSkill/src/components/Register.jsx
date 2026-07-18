import React, { useState } from 'react';
import { BookOpen, Code, Palette, Music, Camera, Users } from "lucide-react";

function Register({ onRegister, onSwitchToLogin, onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (formData.name && formData.email && formData.password) {
      onRegister({ name: formData.name, email: formData.email });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="auth-page">
      <div className="background-animation">
        <div className="gradient-orb orb1"></div>
        <div className="gradient-orb orb2"></div>
        <div className="gradient-orb orb3"></div>
      </div>

      <div className="auth-container reverse">
        <div className="form-section">
          <div className="form-content">
            <h1 className="auth-title">Create Account</h1>
            <p className="auth-subtitle">Sign up to get started</p>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>

              <button type="submit" className="submit-btn">Create Account</button>
            </form>

            <div className="auth-switch">
              <p>Already have an account? <button onClick={onSwitchToLogin} className="switch-btn">Sign In</button></p>
            </div>
          </div>
        </div>

        <div className="video-section">
          <video autoPlay loop muted playsInline className="background-video">
            <source src="https://cdn.pixabay.com/video/2023/07/20/172503-847272857_large.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay"></div>
        </div>
      </div>
    </div>
  );
}

export default Register