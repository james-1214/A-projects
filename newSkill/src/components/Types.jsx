import React, { useState } from 'react';
import { BookOpen, Code, Palette, Music, Camera, Users } from "lucide-react";

function Types() {
  const skills = [
    { icon: <Code size={48} />, name: "Programming", color: "#3498db" },
    { icon: <Palette size={48} />, name: "Design", color: "#e74c3c" },
    { icon: <Music size={48} />, name: "Music", color: "#9b59b6" },
    { icon: <Camera size={48} />, name: "Photography", color: "#f39c12" },
    { icon: <BookOpen size={48} />, name: "Languages", color: "#27ae60" },
    { icon: <Users size={48} />, name: "Teaching", color: "#e67e22" },
  ];

  return (
    <section className="skills-section">
      <h2 className="section-title">Popular Skills to Swap</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            style={{ "--skill-color": skill.color }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Types