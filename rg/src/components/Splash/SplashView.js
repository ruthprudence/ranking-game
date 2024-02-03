import React from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import Footer from '../UI/Footer';
import { PLACEHOLDERS, PROMPTS, ERRORS } from '../../features/constants';

export const SplashView = ({ localTopic, setLocalTopic, handleTopicSubmit, isSubmitEnabled }) => {
    return (
        <div className="page-view">
            <h1>the Ranking Game</h1>
            <div className="input-container">
                <InputField className="input-field" value={localTopic} onChange={(e) => setLocalTopic(e.target.value)} placeholder={PLACEHOLDERS.SPLASH} />
            </div>
            <div className="button-container submit">
                <Button  className="button" id="submitTopicButton"  onClick={handleTopicSubmit} disabled={!isSubmitEnabled}>Submit Topic</Button>
            </div>
            <p><i>{isSubmitEnabled ? PROMPTS.SPLASH : ERRORS.SPLASH}</i></p>
            {/* <p id="splash-prompt"><i>{PROMPTS.SPLASH}</i></p> */}
            <Footer /> 
        </div>
    );
};
