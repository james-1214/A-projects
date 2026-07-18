// src/components/UploadForm.jsx
import React, { useState } from 'react';
import '../styles/UploadForm.css';

const UploadForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: null,
    tags: ''
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file');
        return;
      }
      
      // Validate file size (e.g., max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      setFormData({...formData, image: file});
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.image) {
      // Create a data URL for the image to store
      const reader = new FileReader();
      reader.onload = (e) => {
        onSubmit({
          title: formData.title,
          description: formData.description,
          imageUrl: e.target.result, // This will be a data URL
          tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
          author: 'You',
          likes: 0,
          saves: 0,
          id: Date.now()
        });
      };
      reader.readAsDataURL(formData.image);
      
      // Reset form
      setFormData({ title: '', description: '', image: null, tags: '' });
      setImagePreview(null);
      onClose();
    }
  };

  const removeImage = () => {
    setFormData({...formData, image: null});
    setImagePreview(null);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="upload-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Upload New Pin</h2>
        <div className="upload-form">
          <div className="form-group">
            <label>Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
              placeholder="Enter title"
            />
          </div>
          
          <div className="form-group">
            <label>Upload Image *</label>
            <div className="image-upload-area">
              {!imagePreview ? (
                <div className="upload-placeholder">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    id="image-upload"
                    className="file-input"
                  />
                  <label htmlFor="image-upload" className="upload-label">
                    <div className="upload-icon">📁</div>
                    <div>Click to select image</div>
                    <div className="upload-hint">JPG, PNG, GIF up to 5MB</div>
                  </label>
                </div>
              ) : (
                <div className="image-preview">
                  <img src={imagePreview} alt="Preview" className="preview-image" />
                  <button type="button" onClick={removeImage} className="remove-image">
                    ×
                  </button>
                </div>
              )}
            </div>
          </div>
          
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="Tell everyone what your pin is about"
              rows="3"
            />
          </div>
          
          <div className="form-group">
            <label>Tags (comma separated)</label>
            <input
              type="text"
              value={formData.tags}
              onChange={(e) => setFormData({...formData, tags: e.target.value})}
              placeholder="nature, photography, sunset"
            />
          </div>
          
          <div className="form-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button 
              type="button" 
              onClick={handleSubmit} 
              className="submit-btn"
              disabled={!formData.title || !formData.image}
            >
              Upload Pin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadForm;