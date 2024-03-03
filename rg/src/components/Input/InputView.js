// InputView.js
import React from 'react';
import InputField from '../UI/InputField';
import Footer from '../UI/Footer';
import { MAXCHOICES, PLACEHOLDERS, PROMPTS, ERRORS } from '../../features/constants';
import SoundButton from '../UI/SoundButton';
import Row from '../UI/Row';

export const InputView = ({ topic, rows, isSubmissionFailed, handleAddRow, handleRemoveRow, handleItemChange, handleSubmit, isSubmitEnabled, handleClearRow, addButtonClass }) => {
    const rankButtonClass = isSubmitEnabled ? 'pulsate-animation ' : 'submitTopicButtonDisabled';

    return (
        <div className="page-view">
            <h1 id="headingInput">the Ranking Game</h1>
            <div className="inputPromptContainer">
            <p id="inputTopicDescription">Your Topic:</p>
            <h2 id="inputPageTopic" className="shake-animation-input">{topic}</h2></div>
            {isSubmissionFailed && <p className="error-message">Please ensure all inputs are valid before submitting.</p>}
            <p id="inputPrompt">{isSubmitEnabled ? PROMPTS.INPUT : ERRORS.INPUT}</p>
            <table className="inputTable">
                <tbody>
                {rows.map((row, index) => (
                    <Row
                        key={index}
                        row={row}
                        index={index}
                        handleClearRow={handleClearRow}
                        handleItemChange={handleItemChange}
                        handleRemoveRow={handleRemoveRow}
                    />
                ))}
                </tbody>
            </table>
            <div className={`addButtonContainer ${addButtonClass}`}>
            {rows.length < MAXCHOICES && (
                <SoundButton className="button addItem rowButtons round-button add"  soundName="eatFruit" onClick={handleAddRow}>+</SoundButton>
            )}
            </div>
            

            <SoundButton  className={rankButtonClass} id="RankBtn"  soundName="eatGhost" onClick={handleSubmit} disabled={!isSubmitEnabled}>Rank!</SoundButton>
            <div className="footer-container inputFooter"><Footer /> </div>
        </div>
    );
};
