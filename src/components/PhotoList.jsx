import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { toggleModal, toggleFavorite, photosData, ...state } = props;

  return (
    <ul className="photo-list">
      {/* Mapping through photosData array to render each photo as a list item */}
      {photosData.map((photosData) => (

    <PhotoListItem 
        key={photosData.id} 
        {...state} 
        photosData={photosData} 
        toggleModal={toggleModal} 
        toggleFavorite={toggleFavorite} />

      ))}
    </ul>
  );
};

export default PhotoList;