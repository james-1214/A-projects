import React, { useState } from 'react';
import { BookOpen, Code, Palette, Music, Camera, Users } from "lucide-react";

function Dashboard({ user, onLogout }) {
  return (
    <div className="dashboard-page">
      <div className="background-animation">
        <div className="gradient-orb orb1"></div>
        <div className="gradient-orb orb2"></div>
        <div className="gradient-orb orb3"></div>
      </div>

      <div className="dashboard-container">
        <div className="dashboard-header">
          <h1>Welcome, {user.name || user.email}!</h1>
          <button onClick={onLogout} className="logout-btn">Logout</button>
        </div>

        <div className="dashboard-content">
          <div className="dashboard-card">
            <h2>Your Profile</h2>
            <div className="profile-info">
              <p><strong>Name:</strong> {user.name || 'N/A'}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          </div>

          <div className="dashboard-card">
            <h2>Quick Stats</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">24</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">156</div>
                <div className="stat-label">Tasks</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">89%</div>
                <div className="stat-label">Completion</div>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <h2>Recent Activity</h2>
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-dot"></div>
                <div className="activity-text">Logged in successfully</div>
              </div>
              <div className="activity-item">
                <div className="activity-dot"></div>
                <div className="activity-text">Profile updated</div>
              </div>
              <div className="activity-item">
                <div className="activity-dot"></div>
                <div className="activity-text">New task created</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard