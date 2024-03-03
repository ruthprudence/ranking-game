import React from 'react';
import InputField from '../UI/InputField';
import Footer from '../UI/Footer';
import { PLACEHOLDERS, PROMPTS, ERRORS } from '../../features/constants';
import SoundButton from '../UI/SoundButton';

export const SplashView = ({ localTopic, setLocalTopic, handleTopicSubmit, isSubmitEnabled }) => {
    const splashPromptClass = isSubmitEnabled ? 'shake-animation' : 'marquee-animation';

    const submitTopicButtonClass = isSubmitEnabled ? 'pulsate-animation ' : 'submitTopicButtonDisabled';

    const clearInput = () => {
        setLocalTopic('');
    };

    return (
        <div className="page-view">
            <h1 id="headingSplash">the Ranking Game</h1>
            <div className="splashPromptContainer">
            <p id="splashPrompt" className={splashPromptClass}>{isSubmitEnabled ? PROMPTS.SPLASH : ERRORS.SPLASH}</p>
            </div>
            <div className="input-container">
                <InputField className="input-field" id=
                "topicInput" value={localTopic} onChange={(e) => setLocalTopic(e.target.value)} placeholder={PLACEHOLDERS.SPLASH} />
                <SoundButton
                    className="splashClearTopicButton round-button clear" 
                    soundName="eatFruit"onClick={clearInput}>-</SoundButton>
            </div>
            <div className="button-container submit">
                <SoundButton  
                    className={submitTopicButtonClass} 
                    id="submitTopicButton"
                    soundName="eatGhost"
                    onClick={handleTopicSubmit}
                    disabled={!isSubmitEnabled}
                    >
                    Submit Topic
                </SoundButton>
            </div>

            <div className="footer-container" ><Footer /> </div>
        </div>
    );
};
