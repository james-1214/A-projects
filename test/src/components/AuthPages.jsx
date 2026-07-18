import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, RefreshCw, Facebook, Linkedin, Github, ArrowDown } from 'lucide-react';
import './AuthPages.css';

const AuthPages = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [showMobileForm, setShowMobileForm] = useState(false);
  
  // Form states
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  
  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: '',
    otp: '',
    newPassword: '',
    confirmNewPassword: ''
  });

  // Generate random captcha
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
    setCaptchaInput('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Validation functions
  const validatePassword = (password) => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Handle form submissions
  const handleLogin = () => {
    const newErrors = {};
    
    if (!validateEmail(loginData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!loginData.password) {
      newErrors.password = 'Password is required';
    }
    
    if (Object.keys(newErrors).length === 0) {
      alert('Login successful!');
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const handleRegister = () => {
    const newErrors = {};
    
    if (!registerData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!validateEmail(registerData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!validatePassword(registerData.password)) {
      newErrors.password = 'Password must be 8+ characters with letters, numbers, and special characters';
    }
    
    if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    if (!registerData.otp) {
      newErrors.otp = 'OTP is required';
    }
    
    if (Object.keys(newErrors).length === 0) {
      alert('Registration successful!');
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const sendOtp = () => {
    if (validateEmail(registerData.email)) {
      setIsOtpSent(true);
      alert('OTP sent to your email!');
      setErrors({});
    } else {
      setErrors({ email: 'Please enter a valid email first' });
    }
  };

  const handleForgotPassword = () => {
    if (validateEmail(loginData.email)) {
      setForgotPasswordData({...forgotPasswordData, email: loginData.email});
      setShowForgotPassword(true);
      alert('Password reset OTP sent to your email!');
    } else {
      setErrors({ email: 'Please enter a valid email first' });
    }
  };

  const handlePasswordReset = () => {
    const newErrors = {};
    
    if (!forgotPasswordData.otp) {
      newErrors.resetOtp = 'OTP is required';
    }
    
    if (!validatePassword(forgotPasswordData.newPassword)) {
      newErrors.newPassword = 'Password must be 8+ characters with letters, numbers, and special characters';
    }
    
    if (forgotPasswordData.newPassword !== forgotPasswordData.confirmNewPassword) {
      newErrors.confirmNewPassword = 'Passwords do not match';
    }
    
    if (Object.keys(newErrors).length === 0) {
      alert('Password reset successful!');
      setShowForgotPassword(false);
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  // Social login handlers
  const handleSocialLogin = (provider) => {
    alert(`Login with ${provider} clicked!`);
  };

  // Switch between login and register
  const switchAuthMode = (mode) => {
    setIsLogin(mode === 'login');
    setErrors({});
    setIsOtpSent(false);
    setShowForgotPassword(false);
    generateCaptcha();
  };

  // Social login buttons component
  const SocialButtons = () => (
    <div className="social-container">
      <p className="social-text">Or continue with</p>
      <div className="social-grid">
        <button
          onClick={() => handleSocialLogin('Google')}
          className="social-button"
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Google
        </button>

        <button
          onClick={() => handleSocialLogin('Facebook')}
          className="social-button"
        >
          <Facebook size={18} className="facebook-icon" />
          Facebook
        </button>

        <button
          onClick={() => handleSocialLogin('LinkedIn')}
          className="social-button"
        >
          <Linkedin size={18} className="linkedin-icon" />
          LinkedIn
        </button>

        <button
          onClick={() => handleSocialLogin('GitHub')}
          className="social-button"
        >
          <Github size={18} className="github-icon" />
          GitHub
        </button>
      </div>
    </div>
  );

  return (
    <div className="main-container">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        className="background-video"
      >
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
      </video>

      {/* Desktop Layout */}
      <div className="desktop-layout">
        {/* Overlay with Forms Container */}
        <div className="overlay">
          {/* Forms Container with Sliding Effect */}
          <div className="forms-container">
            
            {/* Left Panel - Dynamic Content */}
            <div className={`left-panel ${isLogin ? 'login-active' : 'register-active'}`}>
              {isLogin ? (
                // Left side when Login is active
                <div className="welcome-section">
                  <div className="welcome-content">
                    <h1 className="welcome-title">Welcome Back!</h1>
                    <p className="welcome-text">Sign in to continue your journey with SkillSwap</p>
                    
                    {/* Floating Shapes */}
                    <div className="floating-shapes">
                      <div className="shape shape-1"></div>
                      <div className="shape shape-2"></div>
                      <div className="shape shape-3"></div>
                    </div>
                    
                    <button
                      onClick={() => switchAuthMode('register')}
                      className="switch-button"
                    >
                      Don't have an account? Register
                    </button>
                  </div>
                </div>
              ) : (
                // Left side form when Register is active
                <div className="form-section">
                  <div className="form-wrapper">
                    <div className="form-header">
                      <h2 className="form-title">Create Account</h2>
                      <p className="form-subtitle">Join the SkillSwap community</p>
                    </div>

                    <div className="form-fields">
                      <div className="field-group">
                        <input
                          type="text"
                          value={registerData.username}
                          onChange={(e) => setRegisterData({...registerData, username: e.target.value})}
                          placeholder="Username"
                          className={`input-field ${errors.username ? 'input-error' : ''}`}
                        />
                        {errors.username && (
                          <span className="error-message">{errors.username}</span>
                        )}
                      </div>

                      <div className="field-group">
                        <input
                          type="email"
                          value={registerData.email}
                          onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                          placeholder="Email address"
                          className={`input-field ${errors.email ? 'input-error' : ''}`}
                        />
                        {errors.email && (
                          <span className="error-message">{errors.email}</span>
                        )}
                      </div>

                      <div className="field-group">
                        <div className="password-wrapper">
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={registerData.password}
                            onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                            placeholder="Password"
                            className={`input-field password-input ${errors.password ? 'input-error' : ''}`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="password-toggle"
                          >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                          </button>
                        </div>
                        {errors.password && (
                          <span className="error-message">{errors.password}</span>
                        )}
                      </div>

                      <div className="field-group">
                        <div className="password-wrapper">
                          <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            value={registerData.confirmPassword}
                            onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                            placeholder="Confirm Password"
                            className={`input-field password-input ${errors.confirmPassword ? 'input-error' : ''}`}
                          />
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="password-toggle"
                          >
                            {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                        {errors.confirmPassword && (
                          <span className="error-message">{errors.confirmPassword}</span>
                        )}
                      </div>

                      <div className="otp-group">
                        <input
                          type="text"
                          value={registerData.otp}
                          onChange={(e) => setRegisterData({...registerData, otp: e.target.value})}
                          placeholder="Enter OTP"
                          maxLength="6"
                          className={`input-field otp-input ${errors.otp ? 'input-error' : ''}`}
                        />
                        <button
                          type="button"
                          onClick={sendOtp}
                          className={`otp-button ${isOtpSent ? 'otp-sent' : ''}`}
                          disabled={isOtpSent}
                        >
                          {isOtpSent ? 'Sent' : 'Send'}
                        </button>
                      </div>
                      {errors.otp && (
                        <span className="error-message">{errors.otp}</span>
                      )}

                      <button
                        type="button"
                        onClick={handleRegister}
                        className="submit-button"
                      >
                        REGISTER
                      </button>

                      <div className="divider"></div>
                      <SocialButtons />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Panel - Dynamic Content */}
            <div className={`right-panel ${!isLogin ? 'register-active' : 'login-active'}`}>
              {!isLogin ? (
                // Right side when Register is active
                <div className="welcome-section">
                  <div className="welcome-content">
                    <h1 className="welcome-title">Join SkillSwap!</h1>
                    <p className="welcome-text">Create an account and start your learning journey</p>
                    
                    {/* Floating Shapes */}
                    <div className="floating-shapes">
                      <div className="shape shape-1 float-2"></div>
                      <div className="shape shape-2 float-1"></div>
                      <div className="shape shape-3 float-3"></div>
                    </div>
                    
                    <button
                      onClick={() => switchAuthMode('login')}
                      className="switch-button"
                    >
                      Already have an account? Login
                    </button>
                  </div>
                </div>
              ) : (
                // Right side form when Login is active
                <div className="form-section">
                  <div className="form-wrapper">
                    {!showForgotPassword ? (
                      <>
                        <div className="form-header">
                          <h2 className="form-title">Welcome Back</h2>
                          <p className="form-subtitle">Sign in to your account</p>
                        </div>

                        <div className="form-fields">
                          <div className="field-group">
                            <input
                              type="email"
                              value={loginData.email}
                              onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                              placeholder="Email address"
                              className={`input-field ${errors.email ? 'input-error' : ''}`}
                            />
                            {errors.email && (
                              <span className="error-message">{errors.email}</span>
                            )}
                          </div>

                          <div className="field-group">
                            <div className="password-wrapper">
                              <input
                                type={showPassword ? 'text' : 'password'}
                                value={loginData.password}
                                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                                placeholder="Password"
                                className={`input-field password-input ${errors.password ? 'input-error' : ''}`}
                              />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="password-toggle"
                              >
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                              </button>
                            </div>
                            {errors.password && (
                              <span className="error-message">{errors.password}</span>
                            )}
                          </div>

                          <div className="form-options">
                            <label className="checkbox-label">
                              <input type="checkbox" className="checkbox" />
                              Remember me
                            </label>
                            <button
                              type="button"
                              onClick={handleForgotPassword}
                              className="forgot-password"
                            >
                              Forgot password?
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={handleLogin}
                            className="submit-button"
                          >
                            LOGIN
                          </button>

                          <div className="divider"></div>
                          <SocialButtons />
                        </div>
                      </>
                    ) : (
                      // Forgot Password Form
                      <div className="form-fields">
                        <div className="form-header">
                          <h2 className="form-title">Reset Password</h2>
                          <p className="form-subtitle">Enter OTP and new password</p>
                        </div>

                        <div className="field-group">
                          <input
                            type="email"
                            value={forgotPasswordData.email}
                            disabled
                            className="input-field input-disabled"
                          />
                        </div>

                        <div className="field-group">
                          <input
                            type="text"
                            value={forgotPasswordData.otp}
                            onChange={(e) => setForgotPasswordData({...forgotPasswordData, otp: e.target.value})}
                            placeholder="Enter OTP from email"
                            maxLength="6"
                            className={`input-field ${errors.resetOtp ? 'input-error' : ''}`}
                          />
                          {errors.resetOtp && (
                            <span className="error-message">{errors.resetOtp}</span>
                          )}
                        </div>

                        <div className="field-group">
                          <div className="password-wrapper">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              value={forgotPasswordData.newPassword}
                              onChange={(e) => setForgotPasswordData({...forgotPasswordData, newPassword: e.target.value})}
                              placeholder="Enter new password"
                              className={`input-field password-input ${errors.newPassword ? 'input-error' : ''}`}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="password-toggle"
                            >
                              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                          </div>
                          {errors.newPassword && (
                            <span className="error-message">{errors.newPassword}</span>
                          )}
                        </div>

                        <div className="field-group">
                          <div className="password-wrapper">
                            <input
                              type={showConfirmPassword ? 'text' : 'password'}
                              value={forgotPasswordData.confirmNewPassword}
                              onChange={(e) => setForgotPasswordData({...forgotPasswordData, confirmNewPassword: e.target.value})}
                              placeholder="Confirm new password"
                              className={`input-field password-input ${errors.confirmNewPassword ? 'input-error' : ''}`}
                            />
                            <button
                              type="button"
                              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                              className="password-toggle"
                            >
                              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                          </div>
                          {errors.confirmNewPassword && (
                            <span className="error-message">{errors.confirmNewPassword}</span>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={handlePasswordReset}
                          className="submit-button"
                        >
                          Reset Password
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setShowForgotPassword(false);
                            setErrors({});
                          }}
                          className="secondary-button"
                        >
                          Back to Login
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="mobile-layout">
        {/* Video Section - Half Height When Form is Shown */}
        <div className={`mobile-video ${showMobileForm ? 'video-compressed' : ''}`}>
          {/* Animated Video Container */}
          <div className={`video-container ${showMobileForm ? 'video-rise' : ''}`}>
            <video 
              autoPlay 
              loop 
              muted 
              className="mobile-video-element"
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video>
          </div>
          
          {/* Gradient Overlay - Same as Desktop */}
          <div className="mobile-overlay"></div>
          
          <div className="mobile-welcome">
            <div className="mobile-welcome-content">
              <h1 className="mobile-title">
                Welcome to 
                <span className="mobile-brand">SkillSwap</span>
              </h1>
              {!showMobileForm && (
                <>
                  <p className="mobile-subtitle">
                    Connect, Learn, and Grow with professionals
                  </p>
                  <button
                    onClick={() => setShowMobileForm(true)}
                    className="mobile-get-started"
                  >
                    Get Started
                    <ArrowDown size={20} />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Form Section - Slides up from bottom */}
        <div className={`mobile-form ${showMobileForm ? 'form-visible' : ''}`}>
          <div className="mobile-form-content">
            {/* Handle bar */}
            <div className="mobile-handle"></div>
            
            {/* Mobile Auth Mode Switcher */}
            <div className="mobile-switcher">
              <button
                onClick={() => switchAuthMode('login')}
                className={`switcher-button ${isLogin ? 'switcher-active' : ''}`}
              >
                Login
              </button>
              <button
                onClick={() => switchAuthMode('register')}
                className={`switcher-button ${!isLogin ? 'switcher-active' : ''}`}
              >
                Register
              </button>
            </div>

            {!showForgotPassword ? (
              <>
                <div className="mobile-form-header">
                  <h2 className="mobile-form-title">
                    {isLogin ? 'USER LOGIN' : 'REGISTER'}
                  </h2>
                  <p className="mobile-form-subtitle">
                    {isLogin ? 'Sign in to your account' : 'Create your account'}
                  </p>
                </div>

                {isLogin ? (
                  <div className="mobile-fields">
                    <div className="field-group">
                      <input
                        type="email"
                        value={loginData.email}
                        onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                        placeholder="Email address"
                        className={`mobile-input ${errors.email ? 'input-error' : ''}`}
                      />
                      {errors.email && (
                        <span className="mobile-error">{errors.email}</span>
                      )}
                    </div>

                    <div className="field-group">
                      <div className="mobile-password-wrapper">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={loginData.password}
                          onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                          placeholder="Password"
                          className={`mobile-input mobile-password-input ${errors.password ? 'input-error' : ''}`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="mobile-password-toggle"
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                      {errors.password && (
                        <span className="mobile-error">{errors.password}</span>
                      )}
                    </div>

                    <div className="mobile-options">
                      <label className="mobile-checkbox-label">
                        <input type="checkbox" className="mobile-checkbox" />
                        Remember me
                      </label>
                      <button
                        type="button"
                        onClick={handleForgotPassword}
                        className="mobile-forgot-password"
                      >
                        Forgot password?
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={handleLogin}
                      className="mobile-submit-button"
                    >
                      LOGIN
                    </button>

                    <div className="mobile-divider"></div>
                    <SocialButtons />
                  </div>
                ) : (
                  <div className="mobile-fields">
                    <div className="field-group">
                      <input
                        type="text"
                        value={registerData.username}
                        onChange={(e) => setRegisterData({...registerData, username: e.target.value})}
                        placeholder="Username"
                        className={`mobile-input ${errors.username ? 'input-error' : ''}`}
                      />
                      {errors.username && (
                        <span className="mobile-error">{errors.username}</span>
                      )}
                    </div>

                    <div className="field-group">
                      <input
                        type="email"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                        placeholder="Email address"
                        className={`mobile-input ${errors.email ? 'input-error' : ''}`}
                      />
                      {errors.email && (
                        <span className="mobile-error">{errors.email}</span>
                      )}
                    </div>

                    <div className="field-group">
                      <div className="mobile-password-wrapper">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={registerData.password}
                          onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                          placeholder="Password"
                          className={`mobile-input mobile-password-input ${errors.password ? 'input-error' : ''}`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="mobile-password-toggle"
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                      {errors.password && (
                        <span className="mobile-error">{errors.password}</span>
                      )}
                    </div>

                    <div className="field-group">
                      <div className="mobile-password-wrapper">
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          value={registerData.confirmPassword}
                          onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                          placeholder="Confirm Password"
                          className={`mobile-input mobile-password-input ${errors.confirmPassword ? 'input-error' : ''}`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="mobile-password-toggle"
                        >
                          {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <span className="mobile-error">{errors.confirmPassword}</span>
                      )}
                    </div>

                    <div className="mobile-otp-group">
                      <input
                        type="text"
                        value={registerData.otp}
                        onChange={(e) => setRegisterData({...registerData, otp: e.target.value})}
                        placeholder="Enter OTP"
                        maxLength="6"
                        className={`mobile-input mobile-otp-input ${errors.otp ? 'input-error' : ''}`}
                      />
                      <button
                        type="button"
                        onClick={sendOtp}
                        className={`mobile-otp-button ${isOtpSent ? 'otp-sent' : ''}`}
                        disabled={isOtpSent}
                      >
                        {isOtpSent ? 'Sent' : 'Send'}
                      </button>
                    </div>
                    {errors.otp && (
                      <span className="mobile-error">{errors.otp}</span>
                    )}

                    <button
                      type="button"
                      onClick={handleRegister}
                      className="mobile-submit-button"
                    >
                      REGISTER
                    </button>

                    <div className="mobile-divider"></div>
                    <SocialButtons />
                  </div>
                )}

                {/* Close button for mobile */}
                <div className="mobile-close">
                  <button
                    onClick={() => setShowMobileForm(false)}
                    className="mobile-close-button"
                  >
                    Close
                  </button>
                </div>
              </>
            ) : (
              // Mobile Forgot Password Form
              <div className="mobile-fields">
                <div className="mobile-form-header">
                  <h2 className="mobile-form-title">Reset Password</h2>
                  <p className="mobile-form-subtitle">Enter OTP and new password</p>
                </div>

                <div className="field-group">
                  <input
                    type="email"
                    value={forgotPasswordData.email}
                    disabled
                    className="mobile-input input-disabled"
                  />
                </div>

                <div className="field-group">
                  <input
                    type="text"
                    value={forgotPasswordData.otp}
                    onChange={(e) => setForgotPasswordData({...forgotPasswordData, otp: e.target.value})}
                    placeholder="Enter OTP from email"
                    maxLength="6"
                    className={`mobile-input ${errors.resetOtp ? 'input-error' : ''}`}
                  />
                  {errors.resetOtp && (
                    <span className="mobile-error">{errors.resetOtp}</span>
                  )}
                </div>

                <div className="field-group">
                  <div className="mobile-password-wrapper">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={forgotPasswordData.newPassword}
                      onChange={(e) => setForgotPasswordData({...forgotPasswordData, newPassword: e.target.value})}
                      placeholder="Enter new password"
                      className={`mobile-input mobile-password-input ${errors.newPassword ? 'input-error' : ''}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="mobile-password-toggle"
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {errors.newPassword && (
                    <span className="mobile-error">{errors.newPassword}</span>
                  )}
                </div>

                <div className="field-group">
                  <div className="mobile-password-wrapper">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      value={forgotPasswordData.confirmNewPassword}
                      onChange={(e) => setForgotPasswordData({...forgotPasswordData, confirmNewPassword: e.target.value})}
                      placeholder="Confirm new password"
                      className={`mobile-input mobile-password-input ${errors.confirmNewPassword ? 'input-error' : ''}`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="mobile-password-toggle"
                    >
                      {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  {errors.confirmNewPassword && (
                    <span className="mobile-error">{errors.confirmNewPassword}</span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handlePasswordReset}
                  className="mobile-submit-button"
                >
                  Reset Password
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowForgotPassword(false);
                    setErrors({});
                  }}
                  className="mobile-secondary-button"
                >
                  Back to Login
                </button>

                <div className="mobile-close">
                  <button
                    onClick={() => setShowMobileForm(false)}
                    className="mobile-close-button"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default AuthPages;