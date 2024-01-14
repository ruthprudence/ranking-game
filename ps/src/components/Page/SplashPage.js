// SplashPage.js
import React, { useState } from 'react';
import useSplashPage from '../../hooks/Page/useSplashPage';

const SplashPage = ({ goToInputPage }) => {
    const [topic, setTopic] = useState('');
    const { handleSubmit } = (inputTopic) => {
        // ... validation logic ...
        goToInputPage(inputTopic); 
        // useSplashPage(setTopic, goToInputPage);
    };

    return (
        <div>
            <h1>tRG/the Ranking Game</h1>
            <h2>Enter a Topic:</h2>
            <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. Fruits"
            />
            <button onClick={() => handleSubmit(topic)}>Submit Topic</button>
        </div>
    );
};

export default SplashPage;
