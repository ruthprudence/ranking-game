import React, { useState } from 'react';
import TopicController from '../controller/TopicController';
import SortingInputController from '../controller/SortingController';
import DisplayRankings from '../components/DisplayRankings';
import { initializeScores, calculateScores, getTieAdjustedRankings } from '../model/PriorityModel';

const PrioritySorter = () => {
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
            scores && <DisplayRankings rankings={getTieAdjustedRankings(scores)} />
          )}
        </>
      )}
    </div>
  );
};

export default PrioritySorter;
