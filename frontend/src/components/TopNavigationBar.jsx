import React from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';
import FavIcon from './FavIcon';

const TopNavigationBar = ({ likedPhotos, handleFetchTopic, topicData }) => {
  const hasLikedPhotos = likedPhotos && likedPhotos.length > 0;

  const handleFetch = (topicId) => {
    // Call handleFetchTopic with the selected topic ID
    handleFetchTopic(topicId);
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      
      <TopicList handleFetch={handleFetch} topicData={topicData} />
      
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
