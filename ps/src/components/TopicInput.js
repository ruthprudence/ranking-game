import React, { useState } from 'react';

const TopicInput = ({ onSubmitTopic }) => {
  const [topic, setTopic] = useState('');

  const handleSubmit = () => {
    if (!topic.trim()) {
      // Provide feedback to the user
      alert("Please enter a topic before submitting.");
      return;
    }
    onSubmitTopic(topic);
  };

  return (
    <div>
  <h1>Ranking Game</h1>
  <div>
    <input
      type="text"
      placeholder="e.g. fruits"
      value={topic}
      className="theme_Box"
      required
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
