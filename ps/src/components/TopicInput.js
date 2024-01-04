import React, { useState } from 'react';

const TopicInput = ({ onSubmitTopic }) => {
  const [topic, setTopic] = useState('');

  const handleSubmit = () => {
    onSubmitTopic(topic);
  };

  return (
    <div>
  <h1>Priorities Sorter</h1>
  <div>
    <input
      type="text"
      placeholder="e.g. Chores"
      value={topic}
      onChange={(e) => setTopic(e.target.value)}
    />
  </div>
  <div>
    <button onClick={handleSubmit}>Submit Topic</button>
  </div>
</div>

  );
};

export default TopicInput;
