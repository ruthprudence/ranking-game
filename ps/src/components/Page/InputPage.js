// InputPage.js
import React from 'react';
import useInputPage from '../../hooks/Page/useInputPage';

const InputPage = ({ setItems, goToMatchupPage }) => {
    const { rows, handleItemChange, handleAddItem, handleRemoveItem, handleSubmit } = useInputPage(setItems, goToMatchupPage);

    return (
        <div>
            <h1>Input Page</h1>
            {rows.map((row, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={row}
                        onChange={(e) => handleItemChange(index, e.target.value)}
                        placeholder="Enter an item"
                    />
                    {index > 2 && (
                        <button onClick={() => handleRemoveItem(index)}>Remove</button>
                    )}
                </div>
            ))}
            <button onClick={handleAddItem}>Add Item</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default InputPage;
