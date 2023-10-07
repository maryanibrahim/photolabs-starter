import React from 'react';
import PropTypes from 'prop-types';
import PhotoListItem from './PhotoListItem'; 
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, likedPhotos, onLikePhoto, onOpenModal }) => {

  const handlePhotoClick = (photo) => {
    onOpenModal(photo);
  };

  const handleLikePhoto = (photoId) => {
    if (typeof onLikePhoto !== 'function') {
      return;
    }
    onLikePhoto(photoId);
  };

  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <li key={photo.id} onClick={() => handlePhotoClick(photo)}>
          <PhotoListItem 
            imageSource={photo.urls.regular}
            username={photo.user.username}
            profile={photo.user.profile}
            id={String(photo.id)}  
            location={photo.location}
            toggleFavorite={() => handleLikePhoto(photo.id)}
            isFavorited={likedPhotos.includes(photo.id)}
            onLike={() => handleLikePhoto(photo.id)}
          />
        </li>
      ))}
    </ul>
  );
}

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
  likedPhotos: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
  onLikePhoto: PropTypes.func.isRequired,
};


export default PhotoList;