import React from 'react';
import PropTypes from 'prop-types';
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({
  imageSource,
  username,
  profile,
  id,
  location,
  isFavorited,
  toggleFavorite,
}) => {
  // This function will be called when the favorite button is clicked
  const handleFavoriteClick = (photoId) => {
    toggleFavorite(photoId); 
  }

  return (
    <div className="photo-list-item">
      <div className="photo-fav-button-container">
        <PhotoFavButton
          initialIsFavorited={isFavorited}
          photoId={String(id)}  
          updateToFavPhotoIds={handleFavoriteClick} // Pass click handler to the button
        />
      </div>
      <img
        src={imageSource}
        alt={`Photo ${id}`}
        className="photo"
      />
      <div className="user-details">
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
    </div>
  );
};

PhotoListItem.propTypes = {
  imageSource: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profile: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }),
  isFavorited: PropTypes.bool.isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};

export default PhotoListItem;
