import React from 'react';
import PropTypes from 'prop-types';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';
import '../styles/HomeRoute.scss';

const HomeRoute = ({
  favoritedPhotos, 
  photoData, 
  showModal, 
  selectedPhoto, 
  openModal, 
  closeModal,
  addFavoritePhoto,
  removeFavoritePhoto
}) =>  {

  const handleFavPhotoUpdate = (photoId, isAdded) => {
    if (isAdded) {
      addFavoritePhoto(photoId);
    } else {
      removeFavoritePhoto(photoId);
    }
  };

  return (
    <div className="home-route">
      <TopNavigationBar likedPhotos={favoritedPhotos} />
      <PhotoList
        photos={photoData}
        likedPhotos={favoritedPhotos}
        onOpenModal={openModal}
        onLikePhoto={handleFavPhotoUpdate}  
      />
      {showModal && (
        <PhotoDetailsModal 
          onClose={closeModal} 
          photo={selectedPhoto} 
          photos={photoData} 
          likedPhotos={favoritedPhotos}  // Pass the likedPhotos prop
          addFavoritePhoto={addFavoritePhoto}
          removeFavoritePhoto={removeFavoritePhoto}
        />
      )}
    </div>
  );
};

HomeRoute.propTypes = {
  favoritedPhotos: PropTypes.array.isRequired,
  photoData: PropTypes.array.isRequired,
  showModal: PropTypes.bool.isRequired,
  selectedPhoto: PropTypes.object,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  addFavoritePhoto: PropTypes.func.isRequired,
  removeFavoritePhoto: PropTypes.func.isRequired
};

export default HomeRoute;
