import React, { useState } from 'react';
import TopicInput from './TopicInput';
import SortingInput from './SortingInput';
import ChoiceManager from './ChoiceManager';
import useRowManager from '../hooks/useRowManager'; 
import usePairGenerator from '../hooks/usePairGenerator';
import { MAXCHOICES } from '../utils/constants'; 

const PrioritySorter = () => {
  const { rows, addRow, removeRow, updateRow } = useRowManager(['', '', '']);
  const [showInput, setShowInput] = useState(true);
  const [topic, setTopic] = useState('');
  const { pairs } = usePairGenerator(rows);

  const handleTopicSubmission = (submittedTopic) => {
    setTopic(submittedTopic);
    setShowInput(false);
  };

  return (
    <div>
      {showInput ? (
        <TopicInput onSubmitTopic={handleTopicSubmission} />
      ) : (
        <>
          <h2>Rank: {topic}!</h2>
          <SortingInput
            rows={rows}
            addRow={addRow}
            updateRow={updateRow}
            removeRow={removeRow}
            MAXCHOICES={MAXCHOICES}
          />
          <ChoiceManager pairs={pairs} rows={rows} />
        </>
      )}
    </div>
  );
};

export default PrioritySorter;