// InputView.js
import React from 'react';
import InputField from '../UI/InputField';
import Footer from '../UI/Footer';
import { MAXCHOICES, PLACEHOLDERS, PROMPTS, ERRORS } from '../../features/constants';
import SoundButton from '../UI/SoundButton';

export const InputView = ({ topic, rows, isSubmissionFailed, handleAddRow, handleRemoveRow, handleItemChange, handleSubmit, isSubmitEnabled, handleClearRow }) => {
    return (
        <div className="page-view">
            <h1 id="headingInput">the Ranking Game</h1>
            <div className="inputPromptContainer">
            <p id="inputTopicDescription">Your Topic:</p>
            <h2 id="inputPageTopic" className="shake-animation">{topic}</h2></div>
            {isSubmissionFailed && <p className="error-message">Please ensure all inputs are valid before submitting.</p>}
            <p id="inputPrompt">{isSubmitEnabled ? PROMPTS.INPUT : ERRORS.INPUT}</p>
            <table className="inputTable">
                <tbody>
                    {rows.map((row, index) => (
                        <tr className="inputRow" key={index}>
                            <td className="index-column">{index + 1}</td>
                            <td className="input-field-cell">
                                <InputField 
                                    value={row} 
                                    onChange={(e) => handleItemChange(index, e.target.value)} 
                                    placeholder={index < 3 ? `e.g. ${PLACEHOLDERS.INPUT_DEFAULT[index]}` : PLACEHOLDERS.INPUT_ROWS} 
                                />
                            </td>
                            <td className="button-cell">
                                {index < 3 ? (
                                    <SoundButton className="button round-button clear" soundName="eatFruit" onClick={() => handleClearRow(index)}>-
                                    </SoundButton>
                                ) : (
                                    <SoundButton className="button round-button remove" soundName="eatFruit" onClick={() => handleRemoveRow(index)}>
                                        -
                                    </SoundButton>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {rows.length < MAXCHOICES && (
                <SoundButton className="button addItem rowButtons round-button add"  soundName="eatFruit" onClick={handleAddRow}>+</SoundButton>
            )}
            

            <SoundButton  className="button submit" id="RankBtn"  soundName="eatGhost" onClick={handleSubmit} disabled={!isSubmitEnabled}>Rank!</SoundButton>
            {/* <p id="inputPrompt">{isSubmitEnabled ? PROMPTS.INPUT : ERRORS.INPUT}</p> */}
            <div className="footer-container inputFooter"><Footer /> </div>
        </div>
    );
};
