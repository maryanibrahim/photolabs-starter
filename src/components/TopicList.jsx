import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = ({ topics = [], onTopicSelect }) => {  
  const handleTopicClick = (topicId) => {
    if (onTopicSelect && typeof onTopicSelect === "function") {
      onTopicSelect(topicId);
    }
  };

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <div 
          key={topic.id} 
          className="topic-list__item"
          onClick={() => handleTopicClick(topic.id)} 
        >
          <TopicListItem topic={topic} />
        </div>
      ))}
    </div>
  );
};

export default TopicList;
