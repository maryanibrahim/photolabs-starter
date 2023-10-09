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
    removeFavoritePhoto
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
/>

    </div>
  );
};

export default App;
