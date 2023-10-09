import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ initialIsFavorited, photoId, updateToFavPhotoIds }) {
  const [isFavorited, setFavorited] = useState(initialIsFavorited);

  // Use useEffect to listen for changes in initialIsFavorited
  useEffect(() => {
    setFavorited(initialIsFavorited);
  }, [initialIsFavorited]);

  const handleIconClick = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent div
    const newFavoritedState = !isFavorited;
    setFavorited(newFavoritedState);
    updateToFavPhotoIds(photoId, newFavoritedState);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleIconClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorited} />
      </div>
    </div>
  );
}

PhotoFavButton.propTypes = {
  initialIsFavorited: PropTypes.bool.isRequired,
  photoId: PropTypes.string.isRequired,
  updateToFavPhotoIds: PropTypes.func.isRequired,
};

export default PhotoFavButton;
