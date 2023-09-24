import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, setSidePeekForLikedPhotos }) => {
  const [displayAlert, setDisplayAlert] = useState(true);
  const [selected, setSelected] = useState(true);

  const handleFavIconClick = () => {
    setSelected(!selected);

    // show the yellow dot. Otherwise, hide it.
    if (selected) {
      setDisplayAlert(true);
    } else {
      setDisplayAlert(false);
    }
  };

  return (
    <div className='fav-badge' onClick={() => setSidePeekForLikedPhotos(true)}>
      {/* Conditionally render the yellow dot based on displayAlert state */}
      {displayAlert && <div className='yellow-dot'></div>}

      <FavIcon
        selected={selected}
        setSidePeekForLikedPhotos={handleFavIconClick}
      />
    </div>
  );
};

export default FavBadge;
