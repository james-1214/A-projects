import React, { useState } from 'react';
import { BookOpen, Code, Palette, Music, Camera, Users } from "lucide-react";

function Hero({ isDark }) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Skills', 'Knowledge', 'Expertise', 'Talents'];

  React.useEffect(() => {
    const handleType = () => {
      const current = loopNum % words.length;
      const fullText = words[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section className={`hero ${isDark ? 'dark' : 'light'}`}>
      <div className="hero-content">
        <h1 className="hero-title">
          Exchange Your <span className="typing-text">{text}</span>
          <span className="cursor">|</span>
        </h1>
        <p className="hero-subtitle">
          Connect with people worldwide and trade skills that matter
        </p>
        <button className="cta-button">Get Started</button>
      </div>
      <div className="hero-gradient"></div>
    </section>
  );
}

export default Hero