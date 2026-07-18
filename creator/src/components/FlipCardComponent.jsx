import React, { useState } from 'react';
import { Plus, User, Mail, Phone, MapPin, Briefcase, Calendar } from 'lucide-react';
import './styles/FlipCardComponent.css';

const FlipCard = ({ person, onEdit }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        {/* Front Side */}
        <div className="flip-card-front">
          <div className="profile-image">
            {person.photo ? (
              <img 
                src={person.photo} 
                alt={person.name}
                className="profile-img"
              />
            ) : (
              <User size={40} className="default-icon" />
            )}
          </div>
          <h2 className="profile-name">{person.name}</h2>
          <p className="profile-role">{person.role}</p>
          <div className="card-indicator"></div>
        </div>

        {/* Back Side */}
        <div className="flip-card-back">
          <div className="back-content">
            <div className="back-header">
              <div className="back-profile-image">
                {person.photo ? (
                  <img 
                    src={person.photo} 
                    alt={person.name}
                    className="back-profile-img"
                  />
                ) : (
                  <User size={20} className="back-default-icon" />
                )}
              </div>
              <div className="back-profile-info">
                <h3 className="back-name">{person.name}</h3>
                <p className="back-role">{person.role}</p>
              </div>
            </div>

            <div className="details-container">
              <div className="detail-item">
                <Mail size={16} className="detail-icon email-icon" />
                <span className="detail-text">{person.email}</span>
              </div>
              <div className="detail-item">
                <Phone size={16} className="detail-icon phone-icon" />
                <span className="detail-text">{person.phone}</span>
              </div>
              <div className="detail-item">
                <MapPin size={16} className="detail-icon location-icon" />
                <span className="detail-text">{person.location}</span>
              </div>
              <div className="detail-item">
                <Briefcase size={16} className="detail-icon department-icon" />
                <span className="detail-text">{person.department}</span>
              </div>
              <div className="detail-item">
                <Calendar size={16} className="detail-icon date-icon" />
                <span className="detail-text">{person.joinDate}</span>
              </div>
            </div>

            <button
              onClick={() => onEdit && onEdit(person)}
              className="edit-btn"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddCardForm = ({ onAdd, onCancel, editData = null }) => {
  const [formData, setFormData] = useState(editData || {
    name: '',
    role: '',
    email: '',
    phone: '',
    location: '',
    department: '',
    joinDate: '',
    photo: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.role && formData.email && formData.phone && formData.location && formData.department && formData.joinDate) {
      onAdd(formData);
      if (!editData) {
        setFormData({
          name: '',
          role: '',
          email: '',
          phone: '',
          location: '',
          department: '',
          joinDate: '',
          photo: ''
        });
      }
    } else {
      alert('Please fill in all required fields');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          photo: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleReset = () => {
    setFormData({
      name: '',
      role: '',
      email: '',
      phone: '',
      location: '',
      department: '',
      joinDate: '',
      photo: ''
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">
          {editData ? 'Edit Card' : 'Add New Card'}
        </h2>
        
        <div className="form-container">
          <div className="form-group">
            <label className="form-label">Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              className="form-input"
              placeholder="Enter full name"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Role *</label>
            <input
              type="text"
              value={formData.role}
              onChange={(e) => handleChange('role', e.target.value)}
              className="form-input"
              placeholder="Enter job role"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="form-input"
              placeholder="Enter email address"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone *</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="form-input"
              placeholder="Enter phone number"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Location *</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              className="form-input"
              placeholder="Enter location"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Department *</label>
            <input
              type="text"
              value={formData.department}
              onChange={(e) => handleChange('department', e.target.value)}
              className="form-input"
              placeholder="Enter department"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Join Date *</label>
            <input
              type="date"
              value={formData.joinDate}
              onChange={(e) => handleChange('joinDate', e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input"
            />
            {formData.photo && (
              <div className="photo-preview">
                <img 
                  src={formData.photo} 
                  alt="Preview" 
                  className="preview-img"
                />
                <button
                  onClick={() => handleChange('photo', '')}
                  className="remove-photo-btn"
                >
                  Remove
                </button>
              </div>
            )}
          </div>

          <div className="form-actions">
            <button
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              {editData ? 'Update' : 'Add'} Card
            </button>
            <button
              onClick={handleReset}
              className="btn btn-reset"
            >
              Reset
            </button>
            <button
              onClick={onCancel}
              className="btn btn-cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddCard = ({ onAdd }) => {
  return (
    <div className="add-card" onClick={onAdd}>
      <div className="add-card-content">
        <Plus size={48} className="add-icon" />
        <h3 className="add-title">Add New Card</h3>
        <p className="add-description">Click to add a new flip card</p>
      </div>
    </div>
  );
};

const FlipCardComponent = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [people, setPeople] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Software Engineer",
      email: "john.doe@company.com",
      phone: "+1 (555) 123-4567",
      location: "New York, NY",
      department: "Engineering",
      joinDate: "2023-01-15",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UX Designer",
      email: "jane.smith@company.com",
      phone: "+1 (555) 987-6543",
      location: "San Francisco, CA",
      department: "Design",
      joinDate: "2022-11-20",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Product Manager",
      email: "mike.johnson@company.com",
      phone: "+1 (555) 456-7890",
      location: "Seattle, WA",
      department: "Product",
      joinDate: "2023-03-10",
      photo: ""
    }
  ]);

  const handleAddCard = (newPerson) => {
    if (editingCard) {
      // Update existing card
      setPeople(prev => prev.map(p => 
        p.id === editingCard.id ? { ...newPerson, id: editingCard.id } : p
      ));
      setEditingCard(null);
    } else {
      // Add new card
      const newId = Math.max(...people.map(p => p.id)) + 1;
      setPeople(prev => [...prev, { ...newPerson, id: newId }]);
    }
    setShowForm(false);
  };

  const handleEditCard = (person) => {
    setEditingCard(person);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingCard(null);
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <h1 className="app-title">Interactive Flip Cards</h1>
        <p className="app-subtitle">Hover over the cards to see detailed information</p>
        
        <div className="cards-grid">
          {people.map((person) => (
            <FlipCard
              key={person.id}
              person={person}
              onEdit={handleEditCard}
            />
          ))}
          
          <AddCard onAdd={() => setShowForm(true)} />
        </div>
      </div>

      {showForm && (
        <AddCardForm
          editData={editingCard}
          onAdd={handleAddCard}
          onCancel={handleCloseForm}
        />
      )}
    </div>
  );
};

export default FlipCardComponent;