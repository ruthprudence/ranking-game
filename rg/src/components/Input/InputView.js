// InputView.js
import React from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import Footer from '../UI/Footer';
import { MAXCHOICES, PLACEHOLDERS, PROMPTS, ERRORS } from '../../features/constants';

export const InputView = ({ topic, rows, isSubmissionFailed, handleAddRow, handleRemoveRow, handleItemChange, handleSubmit, isSubmitEnabled }) => {
    return (
        <div className="page-view">
            <h1 id="headingInput">the Ranking Game</h1>
            <h2 id="inputPageTopic">{topic}</h2>
            {isSubmissionFailed && <p className="error-message">Please ensure all inputs are valid before submitting.</p>}
            <table className="inputTable">
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td className="index-column">{index + 1}</td>
                            <td>
                                <InputField 
                                    value={row} 
                                    onChange={(e) => handleItemChange(index, e.target.value)} 
                                    placeholder={index < 3 ? `e.g. ${PLACEHOLDERS.INPUT_DEFAULT[index]}` : PLACEHOLDERS.INPUT_ROWS}
                                />
                            </td>
                            {index >= 3 && (
                                <td className="remove-button-cell rowButtons">
                                    <Button  className="button round-button remove" onClick={() => handleRemoveRow(index)}>-</Button>
                                </td>
                            )}
                            {index < 3 && <td className="remove-button-cell"></td>}
                        </tr>
                    ))}
                </tbody>
            </table>

            {rows.length < MAXCHOICES && (
                <Button className="button addItem rowButtons round-button add" onClick={handleAddRow}>+</Button>
            )}
            

            <Button  className="button submit" id="RankBtn" onClick={handleSubmit} disabled={!isSubmitEnabled}>Rank!</Button>
            <p id="inputPrompt">{isSubmitEnabled ? PROMPTS.INPUT : ERRORS.INPUT}</p>
            <Footer /> 
        </div>
    );
};
