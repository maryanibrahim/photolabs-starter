import React from 'react';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplication from 'hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    toggleModal,
    closeModal,
    toggleFavorite,
    fetchPhotosByTopic,
    ...state
  } = useApplication();

  return (
    <div className="App">
      <HomeRoute {...state} photosData={state.photosData} toggleModal={toggleModal} closeModal={closeModal} toggleFavorite={toggleFavorite} fetchPhotosByTopic={fetchPhotosByTopic} />
      {state.modalToggle && <PhotoDetailsModal {...state} photosData={state.photosData} toggleModal={toggleModal} closeModal={closeModal} toggleFavorite={toggleFavorite} />}
    </div>
  );
};

export default App;