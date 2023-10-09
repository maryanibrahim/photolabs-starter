import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = ({ topicData, handleFetchTopic }) => {
  if (!topicData || !Array.isArray(topicData)) {
    return null;
  }

  return (
    <div className="top-nav-bar__topic-list">
      {topicData.map((item) => (
        <TopicListItem
          topic_id={item.id}
          handleFetchTopic={handleFetchTopic} // Pass the handleFetchTopic function as a prop
          key={item.id}
          topicData={item.title}
        />
      ))}
    </div>
  );
};

export default TopicList;
