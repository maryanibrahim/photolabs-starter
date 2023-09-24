import React from 'react';

const PhotoListItem = ({ username, imageSource, id, location, profile }) => {
  return (
    <div className="photo-list-item">
      <div className="photographer-info">
        <img src={profile} alt={`Profile of ${username}`} className="profile-picture" />
        <p className="photographer-username">{username}</p>
      </div>
      <div className="photo-details">
        <img src={imageSource} alt={`Photo ${id}`} className="photo" />
        <p className="photo-location">{location}</p>
      </div>
    </div>
  );
};

export default PhotoListItem;
