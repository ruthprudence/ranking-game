// SplashPage.js
import React, { useState } from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import useSplashPage from '../../hooks/Page/useSplashPage';

const SplashPage = ({ goToInputPage }) => {
    const [topic, setTopic] = useState('');
    const { handleSubmit } = useSplashPage(setTopic, goToInputPage); 

    return (
        <div>
            <h1>the Ranking Game</h1>
            <InputField value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="e.g. Fruits" />
            <Button onClick={() => handleSubmit(topic)}>Submit Topic</Button>
            <p><i>Enter something to Rank</i></p>
        </div>
    );
};

export default SplashPage;
