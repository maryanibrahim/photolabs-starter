import React from 'react';
import PropTypes from 'prop-types';
import TopNavigationBar from './TopNavigationBar';
import PhotoList from './PhotoList';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';
import useApplicationData from '../hooks/useApplicationData';
import '../styles/HomeRoute.scss';

const HomeRoute = ({ favoritedPhotos, photoData }) => {
  const {
    showModal,
    selectedPhoto,
    openModal,
    closeModal,
  } = useApplicationData();

  return (
    <div className="home-route">
      <TopNavigationBar likedPhotos={favoritedPhotos} />
      <PhotoList
        photos={photoData}
        likedPhotos={favoritedPhotos}
        onOpenModal={openModal}
      />
      {showModal && (
        <PhotoDetailsModal onClose={closeModal} photo={selectedPhoto} photos={photoData} />
      )}
    </div>
  );
};

HomeRoute.propTypes = {
  favoritedPhotos: PropTypes.array.isRequired,
  photoData: PropTypes.array.isRequired,
};

export default HomeRoute;
