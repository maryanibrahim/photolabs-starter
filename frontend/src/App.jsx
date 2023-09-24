import React from 'react';
import HomeRoute from './components/HomeRoute';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const { favoritedPhotos, updateToFavPhotoIds, photoData } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute favoritedPhotos={favoritedPhotos} updateToFavPhotoIds={updateToFavPhotoIds} photoData={photoData} />
    </div>
  );
};

export default App;
