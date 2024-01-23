// InputView.js
import React from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';

export const InputView = ({ topic,handleAddRow,handleRemoveRow, handleSubmit,handleItemChange, rows }) => {
    return (
        <div>
            <h2>{topic}</h2>
            <table>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <InputField 
                                    value={row} 
                                    onChange={(e) => handleItemChange(index, e.target.value)} 
                                    placeholder={index < 3 ? `e.g. ${['apricots', 'blueberries', 'persimmons'][index]}` : 'Enter an item'}
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
            <Button onClick={handleSubmit}>Submit</Button>
            <p><i>Click "Submit" to begin</i></p>
        </div>
    );
};
