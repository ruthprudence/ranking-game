import React, { useState } from 'react';
import TopicController from './controllers/TopicController';
import SortingInputController from './controllers/SortingController';
import DisplayController from './controllers/DisplayController';
import { initializeScores, calculateScores, getTieAdjustedRankings } from './models/PriorityModel';

const RankingGame = () => {
  const [showInput, setShowInput] = useState(true);
  const [topic, setTopic] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rows, setRows] = useState(['', '', '']);
  const [scores, setScores] = useState({}); 

  console.log('State:', { showInput, topic, isSubmitted, rows, scores });

  const handleTopicSubmissionWrapper = (submittedTopic) => {
    setTopic(submittedTopic);
    setShowInput(false);
    setScores(initializeScores(rows)); 
  };

  const handleSubmitWrapper = (submittedRows) => {
    setIsSubmitted(true);
    const newScores = calculateScores(submittedRows, scores);
    setScores(newScores); 
  };

  return (
    <div>
      {console.log('Rendering')}
      {showInput ? (
        <TopicController onSubmitTopic={handleTopicSubmissionWrapper} />
      ) : (
        <>
          <h2>Rank: {topic}!</h2>
          {!isSubmitted ? (
            <SortingInputController rows={rows} onSubmit={handleSubmitWrapper} />
          ) : (
            scores && <DisplayController rankings={getTieAdjustedRankings(scores)} />
          )}
        </>
      )}
    </div>
  );
};

export default RankingGame;
