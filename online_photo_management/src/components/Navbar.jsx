// src/components/Navbar.jsx
import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = ({ onUploadClick, searchQuery, setSearchQuery }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>PhotoGola</h2>
        </div>
        
        <div className="nav-search">
          <input
            type="text"
            placeholder="Search for ideas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="nav-actions">
          <button className="upload-btn" onClick={onUploadClick}>
            Upload
          </button>
          <div className="profile-menu-container">
            <button 
              className="profile-btn"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" 
                alt="Profile" 
                className="profile-img"
              />
            </button>
            {showProfileMenu && (
              <div className="profile-dropdown">
                <a href="#profile">Your Profile</a>
                <a href="#settings">Settings</a>
                <a href="#logout">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;