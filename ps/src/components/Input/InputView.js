// InputView.js
import React from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import { PLACEHOLDERS, PROMPTS } from '../../features/constants';

export const InputView = ({ topic, rows, isSubmissionFailed, handleAddRow, handleRemoveRow, handleItemChange, handleSubmit, isSubmitEnabled }) => {
    return (
        <div>
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
                                    <Button onClick={() => handleRemoveRow(index)}>Remove</Button>
                                </td>
                            )}
                            {index < 3 && <td className="remove-button-cell"></td>}
                        </tr>
                    ))}
                </tbody>
            </table>
            <Button onClick={handleAddRow}>Add Item</Button>
            <Button onClick={handleSubmit} disabled={!isSubmitEnabled}>Submit</Button>
            <p><i>Click "Submit" to begin</i></p>
        </div>
    );
};
