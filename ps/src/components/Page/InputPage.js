// InputPage.js
import React from 'react';
import useInputPage from '../../hooks/Page/useInputPage';

const InputPage = ({ setItems, goToMatchupPage, topic }) => {
    const { rows, handleItemChange, handleAddItem, handleRemoveItem, handleSubmit } = useInputPage(setItems, goToMatchupPage);

    return (
        <div>
            <h2>Topic: {topic}</h2> {/* Display the topic */}
            {rows.map((row, index) => (
                <div key={index}>
                    <input
                        type="text"
                        value={row}
                        onChange={(e) => handleItemChange(index, e.target.value)}
                        placeholder={index === 0 ? 'e.g. Apricots' : index === 1 ? 'e.g. Blueberries' : index === 2 ? 'e.g. Persimmons' : 'Enter an item'}
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
