// InputView.js
import React from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import Footer from '../UI/Footer';
import { PLACEHOLDERS, PROMPTS, ERRORS } from '../../features/constants';

export const InputView = ({ topic, rows, isSubmissionFailed, handleAddRow, handleRemoveRow, handleItemChange, handleSubmit, isSubmitEnabled }) => {
    return (
        <div className="page-view">
            <h2>{topic}</h2>
            {isSubmissionFailed && <p className="error-message">Please ensure all inputs are valid before submitting.</p>}
            <table>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <InputField 
                                    value={row} 
                                    onChange={(e) => handleItemChange(index, e.target.value)} 
                                    placeholder={index < 3 ? `e.g. ${PLACEHOLDERS.INPUT_DEFAULT[index]}` : PLACEHOLDERS.INPUT_ROWS}
                                />
                            </td>
                            {index >= 3 && (
                                <td className="remove-button-cell">
                                    <Button  className="button" onClick={() => handleRemoveRow(index)}>Remove</Button>
                                </td>
                            )}
                            {index < 3 && <td className="remove-button-cell"></td>}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button  className="button addItem" onClick={handleAddRow}>Add Item</Button>
            <Button  className="button submit" onClick={handleSubmit} disabled={!isSubmitEnabled}>Submit</Button>
            <p><i>{isSubmitEnabled ? PROMPTS.INPUT : ERRORS.INPUT}</i></p>
            <Footer /> 
        </div>
    );
};
