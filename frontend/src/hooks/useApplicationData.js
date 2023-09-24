import { useReducer, useEffect } from 'react';

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
      if (!state.favoritedPhotos.includes(action.payload.id)) {
        return { ...state, favoritedPhotos: [...state.favoritedPhotos, action.payload.id] };
      }
      return state;

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

// Initial state
const initialState = {
  favoritedPhotos: [],
  showModal: false,
  selectedPhoto: null,
  photoData: [],
  topicData: [],
  selectedTopicId: null,
};

// Custom hook to manage application data and actions
function useApplicationData() {
  const [state, dispatch] = useReducer(applicationDataReducer, initialState);

  function openModal(photo) {
    dispatch({ type: ACTIONS.OPEN_MODAL, payload: { photo } });
  }

  function closeModal() {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  }

  function setSelectedTopic(topicId) {
    dispatch({ type: ACTIONS.SET_SELECTED_TOPIC, payload: topicId });  
  }

  // Fetch photo data
  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("Received photo data:", data);
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch(error => {
        console.error('Error fetching photo data:', error);
      });
  
    // Fetch topic data
    fetch('/api/topics')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log("Received topic data:", data);
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching topic data:', error);
      });
  }, []);

  // Fetch photos by the selected topic
  useEffect(() => {
    if (state.selectedTopicId) {
      fetch(`http://localhost:8001/api/topics/photos/${state.selectedTopicId}`)
        .then(response => response.json())
        .then(data => {
          console.log("Received photos by topic:", data);
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
        })
        .catch(error => console.error("Error fetching photos by topic:", error));
    }
  }, [state.selectedTopicId]);

  // Return state and functions
  return {
    favoritedPhotos: state.favoritedPhotos,
    showModal: state.showModal,
    selectedPhoto: state.selectedPhoto,
    photoData: state.photoData,
    topicData: state.topicData,
    openModal,
    closeModal,
    setSelectedTopic,
  };
}

export default useApplicationData;
