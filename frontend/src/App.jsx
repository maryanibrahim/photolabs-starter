import React from 'react';
import HomeRoute from './routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    favoritedPhotos,
    photoData,
    showModal,
    selectedPhoto,
    openModal,
    closeModal,
    addFavoritePhoto,
    removeFavoritePhoto,
    topicData,
    getPhotosByTopic,
    selectedTopicId, // Add selectedTopicId
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        favoritedPhotos={favoritedPhotos}
        photoData={photoData}
        showModal={showModal}
        selectedPhoto={selectedPhoto}
        openModal={openModal}
        closeModal={closeModal}
        addFavoritePhoto={addFavoritePhoto}
        removeFavoritePhoto={removeFavoritePhoto}
        topicData={topicData}
        getPhotosByTopic={getPhotosByTopic}
        selectedTopicId={selectedTopicId} // Pass selectedTopicId
      />
    </div>
  );
};

export default App;
