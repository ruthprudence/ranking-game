// useTopicView.js
import { useState } from 'react';

const useTopicView = (onSubmitTopic) => {
  const [topic, setTopic] = useState('');

  const handleChange = (e) => {
    setTopic(e.target.value);
  };

  return { topic, handleChange, onSubmitTopic };
};

export default useTopicView;
