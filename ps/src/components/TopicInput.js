import React, { useState } from 'react';

const TopicInput = ({ onSubmitTopic }) => {
  const [topic, setTopic] = useState('');

  const handleSubmit = () => {
    onSubmitTopic(topic);
  };

  return (
    <div>
      <h1>Welcome to the Priority Sorter</h1>
      <input
        type="text"
        placeholder="Enter the topic of comparison"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Topic</button>
    </div>
  );
};

export default TopicInput;
