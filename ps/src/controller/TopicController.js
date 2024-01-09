// TopicController.js
import React, { useState } from 'react';
import TopicModel from '../model/TopicModel';
import TopicView from '../view/TopicView';

const TopicController = ({ onSubmitTopic }) => {
  const [model] = useState(new TopicModel());

  const handleTopicChange = (newTopic) => {
    model.setTopic(newTopic);
  };

  const handleSubmit = () => {
    if (!model.isTopicValid()) {
      alert("Please enter a topic before submitting.");
      return;
    }
    onSubmitTopic(model.getTopic());
  };

  return (
    <TopicView 
      topic={model.getTopic()} 
      onTopicChange={handleTopicChange} 
      onSubmitTopic={handleSubmit} 
    />
  );
};

export default TopicController;
