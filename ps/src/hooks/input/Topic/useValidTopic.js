// useTopicModel.js
import { useState } from 'react';

const useValidTopic = () => {
  const [topic, setTopic] = useState('');

  const isTopicValid = () => topic.trim().length > 0;

  return { topic, setTopic, isTopicValid };
};

export default useValidTopic;
