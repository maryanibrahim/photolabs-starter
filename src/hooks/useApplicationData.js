import { useReducer, useEffect } from 'react';
import axios from 'axios';

// Define actions
const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  OPEN_MODAL: 'OPEN_MODAL',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SET_SELECTED_TOPIC: 'SET_SELECTED_TOPIC',
};

// Reducer function to manage application state
function applicationDataReducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return state.favoritedPhotos.includes(action.payload.id) 
        ? state 
        : { ...state, favoritedPhotos: [...state.favoritedPhotos, action.payload.id] };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return { ...state, favoritedPhotos: state.favoritedPhotos.filter(id => id !== action.payload.id) };

    case ACTIONS.OPEN_MODAL:
      return { ...state, showModal: true, selectedPhoto: action.payload.photo };

    case ACTIONS.CLOSE_MODAL:
      return { ...state, showModal: false, selectedPhoto: null };

    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };

    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };

    case ACTIONS.SET_SELECTED_TOPIC:
      return { ...state, selectedTopicId: action.payload };

    default:
      return state;
  }
}

const initialState = {
  favoritedPhotos: [],
  showModal: false,
  selectedPhoto: null,
  photoData: [],
  topicData: [],
  selectedTopicId: null,
};

function useApplicationData() {
  const [state, dispatch] = useReducer(applicationDataReducer, initialState);

  useEffect(() => {
    const photoApiUrl = 'http://localhost:8001/api/photos';
    const topicApiUrl = 'http://localhost:8001/api/topics';

    // Use Promise.all to fetch data from both endpoints concurrently
    Promise.all([axios.get(photoApiUrl), axios.get(topicApiUrl)])
      .then(([photoResponse, topicResponse]) => {
        // Destructure the responses
        const photoData = photoResponse.data;
        const topicData = topicResponse.data;

        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: photoData });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: topicData });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addFavoritePhoto = (photoId) => {
    if (!state.favoritedPhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
    }
  };

  const removeFavoritePhoto = (photoId) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
  };

  const openModal = (photo) => {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: { photo } });
  };

  const closeModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const setSelectedTopic = (topicId) => {
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: topicId });
  };

  return {
    ...state,
    addFavoritePhoto,
    removeFavoritePhoto,
    openModal,
    closeModal,
    setSelectedTopic,
  };
}

export default useApplicationData;
