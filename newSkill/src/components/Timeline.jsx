import React, { useState } from 'react';
import { BookOpen, Code, Palette, Music, Camera, Users } from "lucide-react";

function Timeline({ isDark }) {
  const timelineData = [
    {
      title: 'Create Your Profile',
      description: 'Sign up and list the skills you want to share and learn',
      icon: '👤'
    },
    {
      title: 'Find Your Match',
      description: 'Browse through skilled individuals and connect with them',
      icon: '🔍'
    },
    {
      title: 'Exchange Skills',
      description: 'Schedule sessions and start learning from each other',
      icon: '🤝'
    },
    {
      title: 'Grow Together',
      description: 'Build lasting connections and expand your skill set',
      icon: '🚀'
    }
  ];

  return (
    <section className={`timeline-section ${isDark ? 'dark' : 'light'}`}>
      <h2 className="section-title">How It Works</h2>
      <div className="timeline">
        {timelineData.map((item, idx) => (
          <div key={idx} className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <div className="timeline-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline
