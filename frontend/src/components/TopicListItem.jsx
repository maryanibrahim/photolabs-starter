import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ topicData, handleFetchTopic, topic_id }) => {
  const handleTopicClick = () => {
    // Call handleFetchTopic with the selected topic ID
    handleFetchTopic(topic_id);
  };

  return (
    <div className="topic-list__item" onClick={handleTopicClick}>
      <span className="topic-list__item-text">{topicData}</span>
    </div>
  );
};

export default TopicListItem;
