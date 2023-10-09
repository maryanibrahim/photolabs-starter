import React from 'react';
import TopicList from './TopicList';
import topics from '../mocks/topics';
import '../styles/TopNavigationBar.scss';
import FavIcon from './FavIcon';

const TopNavigationBar = ({ likedPhotos }) => {
  const hasLikedPhotos = likedPhotos.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      
      <TopicList topics={topics} />
      
      {hasLikedPhotos && (
        <div className="fav-notification">
          <div className="notification-dot"></div>
        </div>
        
      )}
      
      <FavIcon
        displayAlert={hasLikedPhotos}
        selected={true}
        alertColor={hasLikedPhotos ? 'yellow' : undefined}
      />
    </div>
  );
};

export default TopNavigationBar;
