// src/components/Feed.jsx
import React from 'react';
import Card from './Card';
import '../styles/Feed.css';

const Feed = ({ posts, onCardClick, onLike, onSave }) => {
  return (
    <div className="feed">
      <div className="masonry-grid">
        {posts.length > 0 ? (
          posts.map(post => (
            <Card 
              key={post.id} 
              post={post} 
              onCardClick={onCardClick}
              onLike={onLike}
              onSave={onSave}
            />
          ))
        ) : (
          <div className="empty-state">
            <h3>No pins found</h3>
            <p>Try adjusting your search or browse different categories.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;