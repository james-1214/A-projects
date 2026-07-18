// src/components/Modal.jsx
import React from 'react';
import '../styles/Modal.css';

const Modal = ({ post, isOpen, onClose }) => {
  if (!isOpen || !post) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-image-container">
          <img src={post.imageUrl} alt={post.title} className="modal-image" />
        </div>
        <div className="modal-info">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <div className="modal-tags">
            {post.tags.map(tag => (
              <span key={tag} className="tag">#{tag}</span>
            ))}
          </div>
          <div className="modal-stats">
            <span>By {post.author}</span>
            <span>{post.likes} likes • {post.saves} saves</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;