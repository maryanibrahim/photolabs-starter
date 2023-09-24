import React, { useState } from 'react';
import PhotoDetailsModal from './PhotoDetailsModal';
import PhotoListItem from '../components/PhotoListItem';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, favoritedPhotos, setFavoritedPhotos, toggleFavorite }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentPhoto] = useState(null); // Track the current photo

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="home-route">
      {photos.map(photo => (
        <PhotoListItem
          key={photo.id}
          imageSource={photo.urls.regular}
          username={photo.user.username}
          profile={photo.user.profile}
          id={photo.id}
          location={photo.location}
          isFavorited={favoritedPhotos.includes(photo.id)}
          toggleFavorite={() => toggleFavorite(photo.id)}
        />
      ))}

      {isModalOpen && (
        <PhotoDetailsModal
          onClose={handleCloseModal}
          photo={currentPhoto} // Pass the current photo to the modal
          photos={photos}
          favoritedPhotos={favoritedPhotos}
          setFavoritedPhotos={setFavoritedPhotos}
          toggleFavorite={toggleFavorite}
        />
      )}
      
      {/* Insert other React components and content */}
    </div>
  );
};

export default HomeRoute;
