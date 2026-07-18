import React, { useState } from 'react';
import './App.css';

const AuthForm = () => {
  const [activeForm, setActiveForm] = useState('login'); // 'login' or 'register'
  const [showOtp, setShowOtp] = useState(false);
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false
  });
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: '',
    rememberMe: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (formType) => {
    if (formType === 'register' && !showOtp) {
      setShowOtp(true);
      return;
    }
    
    console.log(`${formType} submitted:`, formData);
    // Handle authentication logic here
  };

  const resetForm = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      otp: '',
      rememberMe: false
    });
    setShowPassword({
      password: false,
      confirmPassword: false
    });
    setShowOtp(false);
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const switchToLogin = () => {
    setActiveForm('login');
    resetForm();
  };

  const switchToRegister = () => {
    setActiveForm('register');
    resetForm();
  };

  const socialProviders = [
    { name: 'Google', icon: '🔍', className: 'google' },
    { name: 'GitHub', icon: '⚡', className: 'github' },
    { name: 'LinkedIn', icon: '💼', className: 'linkedin' }
  ];

  return (
    <>
     
      <div className="auth-container">
        {/* Video Background */}
        <div className="video-background">
          <video className="background-video" autoPlay loop muted playsInline>
            <source src="https://cdn.pixabay.com/vimeo/415498209/background-41549.mp4?width=1280&hash=f5b9ad3c27e97cad0f1a6d5a2c7fb6b1b5e97cad" type="video/mp4" />
            <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Floating Elements */}
        <div className="floating-elements">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
          <div className="floating-cloud cloud-1"></div>
          <div className="floating-cloud cloud-2"></div>
          <div className="floating-cloud cloud-3"></div>
        </div>

        {/* Main Auth Wrapper */}
        <div className="auth-wrapper">
          {/* Register Form - Left Side */}
          <div className={`form-card ${activeForm === 'register' ? 'active' : ''}`} style={{ display: activeForm === 'login' ? 'none' : 'block' }}>
            <div className="form-header">
              <div className="logo">
                <div className="logo-icon">🚀</div>
                <span className="logo-text">AuthFlow</span>
              </div>
              <h2 className="form-title">
                {showOtp ? 'Verify Your Email' : 'Create Account'}
              </h2>
              <p className="form-subtitle">
                {showOtp 
                  ? 'Enter the 6-digit code sent to your email' 
                  : 'Join thousands of users today'
                }
              </p>
            </div>

            {showOtp ? (
              <div className="otp-container fade-in">
                <div className="otp-inputs">
                  {[...Array(6)].map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      className="otp-input"
                      maxLength="1"
                      onChange={(e) => {
                        if (e.target.value && e.target.nextElementSibling) {
                          e.target.nextElementSibling.focus();
                        }
                      }}
                    />
                  ))}
                </div>
                
                <button 
                  className="submit-btn"
                  onClick={() => handleSubmit('register')}
                >
                  Verify & Create Account
                </button>

                <div className="form-switch">
                  Didn't receive the code?{' '}
                  <button className="switch-btn" onClick={() => setShowOtp(false)}>
                    Resend Code
                  </button>
                </div>
              </div>
            ) : (
              <div className="fade-in">
                <div className="form-group">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-input"
                    placeholder="Choose your username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Password</label>
                  <div className="input-wrapper">
                    <input
                      type={showPassword.password ? "text" : "password"}
                      name="password"
                      className="form-input with-icon"
                      placeholder="Create a strong password"
                      value={formData.password}
                      onChange={handleInputChange}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => togglePasswordVisibility('password')}
                      title={showPassword.password ? "Hide password" : "Show password"}
                    >
                      {showPassword.password ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Confirm Password</label>
                  <div className="input-wrapper">
                    <input
                      type={showPassword.confirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      className="form-input with-icon"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => togglePasswordVisibility('confirmPassword')}
                      title={showPassword.confirmPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword.confirmPassword ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>

                <button 
                  className="submit-btn"
                  onClick={() => handleSubmit('register')}
                >
                  Create Account
                </button>

                <div className="divider">
                  <div className="divider-line"></div>
                  <span className="divider-text">or sign up with</span>
                  <div className="divider-line"></div>
                </div>

                <div className="social-buttons">
                  {socialProviders.map((provider) => (
                    <button key={provider.name} className={`social-btn ${provider.className}`}>
                      <span className="social-icon">{provider.icon}</span>
                      <span>{provider.name}</span>
                    </button>
                  ))}
                </div>

                <div className="form-switch">
                  Already have an account?{' '}
                  <button className="switch-btn" onClick={switchToLogin}>
                    Sign in
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Login Form - Right Side */}
          <div className={`form-card ${activeForm === 'login' ? 'active' : ''}`} style={{ display: activeForm === 'register' ? 'none' : 'block' }}>
            <div className="form-header">
              <div className="logo">
                <div className="logo-icon">🔐</div>
                <span className="logo-text">AuthFlow</span>
              </div>
              <h2 className="form-title">Welcome Back</h2>
              <p className="form-subtitle">
                Sign in to your account to continue
              </p>
            </div>

            <div className="fade-in">
              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <div className="input-wrapper">
                  <input
                    type={showPassword.password ? "text" : "password"}
                    name="password"
                    className="form-input with-icon"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => togglePasswordVisibility('password')}
                    title={showPassword.password ? "Hide password" : "Show password"}
                  >
                    {showPassword.password ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              <div className="form-options">
                <label className="remember-me">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    className="remember-checkbox"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                  />
                  Remember me
                </label>
                <a href="#" className="forgot-password">Forgot password?</a>
              </div>

              <button 
                className="submit-btn"
                onClick={() => handleSubmit('login')}
              >
                Sign In
              </button>

              <div className="divider">
                <div className="divider-line"></div>
                <span className="divider-text">or sign in with</span>
                <div className="divider-line"></div>
              </div>

              <div className="social-buttons">
                {socialProviders.map((provider) => (
                  <button key={provider.name} className={`social-btn ${provider.className}`}>
                    <span className="social-icon">{provider.icon}</span>
                    <span>{provider.name}</span>
                  </button>
                ))}
              </div>

              <div className="form-switch">
                Don't have an account?{' '}
                <button className="switch-btn" onClick={switchToRegister}>
                  Sign up
                </button>
              </div>
            </div>
          </div>

          {/* Video Illustration - Shows when login is active (right side) */}
          {activeForm === 'login' && (
            <div className="video-illustration">
              <div className="video-card">
                <video 
                  className="illustration-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="https://cdn.pixabay.com/vimeo/415498209/background-41549.mp4?width=640&hash=f5b9ad3c27e97cad0f1a6d5a2c7fb6b1b5e97cad" type="video/mp4" />
                  <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_640x360_1mb.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay">
                  <div className="floating-icon">🔐</div>
                  <h3>Secure Login</h3>
                  <p>Access your account safely</p>
                  <button className="video-switch-btn" onClick={switchToRegister}>
                    Create New Account
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Video Illustration - Shows when register is active (left side) */}
          {activeForm === 'register' && (
            <div className="video-illustration">
              <div className="video-card">
                <video 
                  className="illustration-video" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="https://cdn.pixabay.com/vimeo/415498209/background-41549.mp4?width=640&hash=f5b9ad3c27e97cad0f1a6d5a2c7fb6b1b5e97cad" type="video/mp4" />
                  <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_640x360_1mb.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay">
                  <div className="floating-icon">🚀</div>
                  <h3>Join Our Community</h3>
                  <p>Start your journey with us today</p>
                  <button className="video-switch-btn" onClick={switchToLogin}>
                    Already Have Account?
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthForm;




 