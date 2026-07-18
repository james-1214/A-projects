// src/components/Card.jsx
import React, { useState } from 'react';
import '../styles/Card.css';

const Card = ({ post, onCardClick, onLike, onSave }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onCardClick(post)}
    >
      <div className="card-image-container">
        {!imageLoaded && <div className="image-placeholder">Loading...</div>}
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="card-image"
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
        
        {isHovered && (
          <div className="card-overlay">
            <div className="card-actions">
              <button 
                className="action-btn save-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onSave(post.id);
                }}
              >
                Save
              </button>
              <button 
                className="action-btn like-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onLike(post.id);
                }}
              >
                ♥ {post.likes}
              </button>
              <button 
                className="action-btn share-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  if (navigator.share) {
                    navigator.share({
                      title: post.title,
                      text: post.description,
                      url: window.location.href
                    });
                  }
                }}
              >
                Share
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{post.title}</h3>
        <p className="card-description">{post.description}</p>
        <div className="card-tags">
          {post.tags.map(tag => (
            <span key={tag} className="tag">#{tag}</span>
          ))}
        </div>
        <div className="card-footer">
          <span className="author">By {post.author}</span>
          <div className="stats">
            <span>{post.likes} likes</span>
            <span>{post.saves} saves</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;