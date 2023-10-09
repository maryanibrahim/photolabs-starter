import React, { useEffect, useState } from 'react';
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
  removeFavoritePhoto,
  handleFetch,
  topicData,
  selectedTopicId,
}) => {
  // Use state to store the filtered photos
  const [filteredPhotos, setFilteredPhotos] = useState([]);

  useEffect(() => {
    // Check if selectedTopicId is defined
    if (selectedTopicId !== null) {
      const filtered = photoData.filter((photo) => photo.topic_id === selectedTopicId);
      setFilteredPhotos(filtered);
    } else {
      // If selectedTopicId is not defined, use all photos
      setFilteredPhotos(photoData);
    }
  }, [selectedTopicId, photoData]);

  const handleFavPhotoUpdate = (photoId, isAdded) => {
    if (isAdded) {
      addFavoritePhoto(photoId);
    } else {
      removeFavoritePhoto(photoId);
    }
  };

  return (
    <div className="home-route">
      <TopNavigationBar handleFetch={handleFetch} topicData={topicData} />
      <PhotoList
        photos={filteredPhotos} // Use the filtered photos
        likedPhotos={favoritedPhotos}
        onOpenModal={openModal}
        onLikePhoto={handleFavPhotoUpdate}
      />
      {showModal && (
        <PhotoDetailsModal
          onClose={closeModal}
          photo={selectedPhoto}
          likedPhotos={favoritedPhotos}
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
  removeFavoritePhoto: PropTypes.func.isRequired,
  selectedTopicId: PropTypes.number,
};

export default HomeRoute;
