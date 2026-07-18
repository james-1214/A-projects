// src/components/Sidebar.jsx
import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ categories, selectedCategory, onCategoryChange, isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <h3>Categories</h3>
      <div className="category-list">
        {categories.map(category => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;