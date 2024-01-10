// TopicView.js
import React from 'react';

const TopicView = ({ topic, onTopicChange, onSubmitTopic }) => (
  <div>
    <h1>Ranking Game</h1>
    <div>
      <input
        type="text"
        placeholder="e.g. fruits"
        value={topic}
        className="theme_Box"
        onChange={(e) => onTopicChange(e.target.value)}
      />
    </div>
    <div>
      <button onClick={onSubmitTopic}>Submit Topic</button>
    </div>
  </div>
);

export default TopicView;
