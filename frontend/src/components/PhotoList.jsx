import React from 'react';
import PhotoListItem from './PhotoListItem'; 
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, likedPhotos, onLikePhoto, onOpenModal }) => {

  // Function to handle a photo click and open the modal
  const handlePhotoClick = (photo) => {
    console.log(photo); // This will print the photo data to the console

    onOpenModal(photo); // Pass the photo data to the onOpenModal function to open the modal
  };

  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <li key={photo.id} onClick={() => handlePhotoClick(photo)}>
          {/* Pass photo data and actions as props to PhotoListItem */}
          <PhotoListItem 
            imageSource={photo.urls.regular}
            username={photo.user.username}
            profile={photo.user.profile}
            id={photo.id}
            location={photo.location}

            // Pass the onLikePhoto function as a prop to handle liking photos
            onLikePhoto={onLikePhoto}

            // Check if the photo is liked and pass the info as a prop
            isLiked={likedPhotos.includes(photo.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default PhotoList;
