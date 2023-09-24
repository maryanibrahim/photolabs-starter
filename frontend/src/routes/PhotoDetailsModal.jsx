import React from 'react';
import PhotoListItem from '../components/PhotoListItem';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onClose, photo, photos, favoritedPhotos, setFavoritedPhotos, ...props }) => {
    // Filtering out the current photo and getting the rest as "similar photos"
    const similarPhotos = photos.filter(p => p.id !== photo.id);
  
    const isPhotoFavorited = (photoId) => {
        return favoritedPhotos.includes(photoId);
    
    };

    const toggleFavorite = (photoId) => {
        setFavoritedPhotos((prevFavs) => {
          const updatedFavs = isPhotoFavorited(photoId)
            ? prevFavs.filter((id) => id !== photoId)
            : [...prevFavs, photoId];
      
          console.log(updatedFavs); // Log the updated state
          return updatedFavs; // Return the updated state
        });
      };
    
    return (
      // The modal overlay
      <div className="photo-details-modal-overlay" onClick={onClose}>
        
        <div className="photo-details-modal">

         {/* Close Button */}
            <button className="photo-details-modal__close-button" onClick={onClose}>
                <img src={closeSymbol} alt="close symbol" />
            </button>
  
            {/* Display the larger version of the clicked photo */}
            <img src={photo.urls.full} alt="clicked photo" className="photo-details-modal__image" />

            {/* Display similar photos */}
            <div className="photo-details-modal__similar-photos">
                <h3>Similar Photos</h3>
                <div className="photo-details-modal__similar-photos-container">
                    {similarPhotos.map(similarPhoto => (
                        <PhotoListItem 
                            key={similarPhoto.id} 
                            imageSource={similarPhoto.urls.regular}
                            username={similarPhoto.user.username}
                            profile={similarPhoto.user.profile}
                            id={similarPhoto.id}
                            location={similarPhoto.location}
                            
                        />
                    ))}
                </div>
            </div>
  
        </div>
  
      </div>
    )
};

export default PhotoDetailsModal;
