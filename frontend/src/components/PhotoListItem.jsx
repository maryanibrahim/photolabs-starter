import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ imageSource, username, profile, id, location, isFavorited, toggleFavorite, ...props }) => {
  console.log('Received props in PhotoListItem:', { imageSource, username, profile, id, location, isFavorited });
  const [isNotificationVisible, setNotificationVisible] = useState(false);

  const handleToggleFavorite = () => {
    toggleFavorite(id);
    setNotificationVisible(true); // Show the notification
  };

  const closeNotification = () => {
    setNotificationVisible(false);
  };

  return (
    <div className="photo-list-item">
      <PhotoFavButton
        isFavorited={isFavorited}
        toggleFavorite={handleToggleFavorite}
        isNotificationVisible={isNotificationVisible}
      />
      <img
        src={imageSource}
        alt={`Photo ${id}`}
        className="photo"
      />

      <div className="user-details">
        <div className="user-profile">
          <img
            src={profile || "/path_to_default_image/default_profile.jpg"}
            alt={`Profile of ${username}`}
            className="profile-picture"
          />
          <div className="user-info">
            <p className="photographer-username">{username}</p>
            <p className="photo-location">{`${location.city}, ${location.country}`}</p>
          </div>
        </div>

        {isNotificationVisible && (
          <div className="notification">
            <p>Favorited!</p>
            <button onClick={closeNotification}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

// Using prop-types
PhotoListItem.propTypes = {
  imageSource: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profile: PropTypes.string,  
  id: PropTypes.string.isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  isFavorited: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default PhotoListItem;
