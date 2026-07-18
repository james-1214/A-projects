import React, { useState } from 'react';
import { BookOpen, Code, Palette, Music, Camera, Users } from "lucide-react";

function Media({ isDark }) {
  const mediaItems = [
    { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop' },
    { url: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=300&fit=crop' },
    { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop' },
    { url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop' },
    { url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop' },
    { url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop' }
  ];

  return (
    <section className={`media-scroll ${isDark ? 'dark' : 'light'}`}>
      <h2 className="section-title">Join Our Growing Community</h2>
      
      <div className="scroll-container">
        <div className="scroll-row scroll-left">
          {[...mediaItems, ...mediaItems].map((item, idx) => (
            <div key={idx} className="media-card">
              <img src={item.url} alt={`Skill ${idx}`} />
              <div className="media-overlay">
                <span>Skill Exchange</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-container">
        <div className="scroll-row scroll-right">
          {[...mediaItems, ...mediaItems].map((item, idx) => (
            <div key={idx} className="media-card">
              <img src={item.url} alt={`Skill ${idx}`} />
              <div className="media-overlay">
                <span>Learn & Teach</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Media