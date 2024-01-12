// SplashPage.js
import React, { useState } from 'react';
import useSplashPage from '../../hooks/Page/useSplashPage';

const SplashPage = ({ goToInputPage }) => {
    const [topic, setTopic] = useState('');
    const { handleSubmit } = useSplashPage(setTopic, goToInputPage);

    return (
        <div>
            <h1>Welcome to the Ranking Game</h1>
            <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Enter a topic"
            />
            <button onClick={() => handleSubmit(topic)}>Submit Topic</button>
        </div>
    );
};

export default SplashPage;
