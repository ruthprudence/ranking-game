import React from 'react';
import useInputPage from '../../hooks/Page/useInputPage';

const InputPage = ({ setItems, goToMatchupPage, topic }) => {
    const { rows, handleItemChange, handleAddItem, handleRemoveItem, handleSubmit } = useInputPage(setItems, goToMatchupPage);

    return (
        <div>
            <h2>Topic: {topic}</h2>
            <table>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <input
                                    type="text"
                                    value={row}
                                    onChange={(e) => handleItemChange(index, e.target.value)}
                                    placeholder={index === 0 ? 'e.g. apricots' : index === 1 ? 'e.g. blueberries' : index === 2 ? 'e.g. persimmons' : 'Enter an item'}
                                />
                            </td>
                            {index > 2 ? (
                                <td className="remove-button-cell">
                                    <button onClick={() => handleRemoveItem(index)}>Remove</button>
                                </td>
                            ) : (
                                <td className="remove-button-cell"></td> // Add an empty cell for alignment
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleAddItem}>Add Item</button>
            <button onClick={handleSubmit}>Submit</button>
            <h3>Click "Submit" to begin</h3>
        </div>
    );
};

export default InputPage;