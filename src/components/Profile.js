import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/profile.css';

const Profile = () => {
  // State for user profile data
  const [profile, setProfile] = useState({
    name: 'Sponsor Name',
    mission: 'To support initiatives that create a positive impact in society.',
    about: 'This section includes details about the sponsor...',
    contact: 'info@sponsor.com | +123 456 7890',
    email: 'contact@sponsor.com',
    location: 'New York, USA',
    profilePicture: 'https://via.placeholder.com/150', // Default profile picture
  });

  const [isEditing, setIsEditing] = useState(false);  // Toggle for edit mode
  const [newPicture, setNewPicture] = useState(null); // New picture state

  // Handle input changes for profile fields
  const handleInputChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Handle profile picture upload
  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewPicture(URL.createObjectURL(file)); // Preview image locally
    }
  };

  // Save changes (for now, just toggling back to view mode)
  const handleSaveChanges = () => {
    setProfile((prev) => ({
      ...prev,
      profilePicture: newPicture || prev.profilePicture, // Update picture
    }));
    setIsEditing(false); // Exit edit mode
  };

  return (
    <div className="profile-content">
      <div className="container mt-5">
        <div className="card profile-card shadow-lg">
          <div className="row g-0">
            <div className="col-md-4 text-center">
              {/* Profile Picture */}
              <img
                src={newPicture || profile.profilePicture}
                alt="Profile"
                className="img-fluid rounded-start mb-3 profile-picture"
              />
              {isEditing && (
                <input type="file" accept="image/*" onChange={handlePictureChange} className="file-input" />
              )}
            </div>
            <div className="col-md-8">
              <div className="card-body profile-details">
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleInputChange}
                      className="form-control mb-3 input-dark"
                      placeholder="Sponsor Name"
                    />
                    <textarea
                      name="about"
                      value={profile.about}
                      onChange={handleInputChange}
                      className="form-control mb-3 input-dark"
                      placeholder="About the sponsor"
                    />
                    <textarea
                      name="mission"
                      value={profile.mission}
                      onChange={handleInputChange}
                      className="form-control mb-3 input-dark"
                      placeholder="Mission"
                    />
                    <input
                      type="text"
                      name="contact"
                      value={profile.contact}
                      onChange={handleInputChange}
                      className="form-control mb-3 input-dark"
                      placeholder="Contact details"
                    />
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleInputChange}
                      className="form-control mb-3 input-dark"
                      placeholder="Email"
                    />
                    <input
                      type="text"
                      name="location"
                      value={profile.location}
                      onChange={handleInputChange}
                      className="form-control mb-3 input-dark"
                      placeholder="Location"
                    />
                    <button className="btn btn-primary" onClick={handleSaveChanges}>
                      Save Changes
                    </button>
                  </>
                ) : (
                  <>
                  <h2 className="card-title">{profile.name}</h2>
                  
                  <p className="card-text">
                    <strong>About the Sponsor: <span className="text-blue">{profile.about}</span></strong>
                  </p>
                
                  <p className="card-text">
                    <strong>Mission: <span className="text-blue">{profile.mission}</span></strong>
                  </p>
                
                  <p className="card-text">
                    <strong>Contact: <span className="text-blue">{profile.contact}</span></strong>
                  </p>
                
                  <p className="card-text">
                    <strong>Email: <span className="text-blue">{profile.email}</span></strong>
                  </p>
                
                  <p className="card-text">
                    <strong>Location: <span className="text-blue">{profile.location}</span></strong>
                  </p>
                
                  <a href="https://www.sponsorwebsite.com" className="btn btn-primary">
                    Visit Sponsor Website
                  </a>
                </>
                

                )}

                {/* Edit and Save Buttons */}
                {!isEditing ? (
                  <button className="btn btn-secondary mt-3" onClick={() => setIsEditing(true)}>
                    Edit Profile
                  </button>
                ) : (
                  <button className="btn btn-secondary mt-3" onClick={() => setIsEditing(false)}>
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
