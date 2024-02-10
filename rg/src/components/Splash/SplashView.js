import React from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import Footer from '../UI/Footer';
import { PLACEHOLDERS, PROMPTS, ERRORS } from '../../features/constants';
import SoundButton from '../UI/SoundButton';

export const SplashView = ({ localTopic, setLocalTopic, handleTopicSubmit, isSubmitEnabled }) => {
    return (
        <div className="page-view">
            <h1 id="headingSplash">the Ranking Game</h1>
            <div className="input-container">
                <InputField className="input-field" id=
                "topicInput" value={localTopic} onChange={(e) => setLocalTopic(e.target.value)} placeholder={PLACEHOLDERS.SPLASH} />
            </div>
            <div className="button-container submit">
                <SoundButton  className="button" id="submitTopicButton"  soundName="eatFruit"  onClick={handleTopicSubmit} disabled={!isSubmitEnabled}>Submit Topic</SoundButton>
            </div>
            <p id="splashPrompt"><i>{isSubmitEnabled ? PROMPTS.SPLASH : ERRORS.SPLASH}</i></p>
            {/* <p id="splash-prompt"><i>{PROMPTS.SPLASH}</i></p> */}
            <div className="footer-container" ><Footer /> </div>
        </div>
    );
};
