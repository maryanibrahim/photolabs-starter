import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import topics from '../mocks/topics'; 
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ likedPhotos }) => {
  // Determine if there are liked photos
  const hasLikedPhotos = likedPhotos.length > 0;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      {hasLikedPhotos && (
        <div className="fav-notification">
          <span className="notification-dot"></span>
        </div>
      )}
      <FavBadge likedPhotos={likedPhotos} /> {/* Pass the likedPhotos array */}
    </div>
  );
}

export default TopNavigationBar;
