import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PhotoListItem from 'components/PhotoListItem';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onClose, photo, likedPhotos, addFavoritePhoto, removeFavoritePhoto }) => {
  const [isFavorited, setIsFavorited] = useState([]);

 const toggleFavorite = (e, photoId) => {
    e.stopPropagation(); // Prevents the click event from propagating to parent elements

    if (isFavorited.includes(photoId)) {
      removeFavoritePhoto(photoId);
      setIsFavorited(prev => prev.filter(id => id !== photoId));
    } else {
      addFavoritePhoto(photoId);
      setIsFavorited(prev => [...prev, photoId]);
    }
};


  if (!photo) return null;

  return (
    <div className="photo-details-modal-overlay">
      <div className="photo-details-modal">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="close symbol" />
        </button>

        {photo.urls && photo.user && (
          <div className="larger-photo-container">
            <PhotoListItem 
              imageSource={photo.urls.regular}
              username={photo.user.username}
              profile={photo.user.profile}
              id={photo.id}
              location={photo.location}
              isFavorited={isFavorited.includes(photo.id)}
              onLike={() => handleLikePhoto(photo.id)}
              toggleFavorite={() => toggleFavorite(photo.id)}
            />
          </div>
        )}

        <h3>Similar Photos</h3>
        {photo.similar_photos && (
          <div className="photo-details-modal__similar-photos">
            {photo.similar_photos.map(similarPhoto => (
              similarPhoto.urls && similarPhoto.user && (
                <PhotoListItem 
                  key={similarPhoto.id}
                  imageSource={similarPhoto.urls.regular}
                  username={similarPhoto.user.username}
                  profile={similarPhoto.user.profile}
                  id={similarPhoto.id}
                  location={similarPhoto.location}
                  isFavorited={likedPhotos.includes(similarPhoto.id)}
                  toggleFavorite={() => toggleFavorite(similarPhoto.id)}
                />
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

PhotoDetailsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  photo: PropTypes.object,
  likedPhotos: PropTypes.array.isRequired,
  addFavoritePhoto: PropTypes.func.isRequired,
  removeFavoritePhoto: PropTypes.func.isRequired
};

export default PhotoDetailsModal;
