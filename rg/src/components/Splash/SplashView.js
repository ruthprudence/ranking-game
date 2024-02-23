import React from 'react';
import InputField from '../UI/InputField';
import Footer from '../UI/Footer';
import { PLACEHOLDERS, PROMPTS, ERRORS } from '../../features/constants';
import SoundButton from '../UI/SoundButton';

export const SplashView = ({ localTopic, setLocalTopic, handleTopicSubmit, isSubmitEnabled }) => {
    const splashPromptClass = isSubmitEnabled ? 'shake-animation' : 'marquee-animation';

    const submitTopicButtonClass = isSubmitEnabled ? 'pulsate-animation ' : 'submitTopicButtonDisabled';

    return (
        <div className="page-view">
            <h1 id="headingSplash">the Ranking Game</h1>
            <p id="splashPrompt" class={splashPromptClass}><i>{isSubmitEnabled ? PROMPTS.SPLASH : ERRORS.SPLASH}</i></p>
            <div className="input-container">
                <InputField className="input-field" id=
                "topicInput" value={localTopic} onChange={(e) => setLocalTopic(e.target.value)} placeholder={PLACEHOLDERS.SPLASH} />
            </div>
            <div className="button-container submit">
                <SoundButton  
                    className={submitTopicButtonClass} 
                    isDisabled={!isSubmitEnabled}
                    id="submitTopicButton"
                    soundName="eatFruit"
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
