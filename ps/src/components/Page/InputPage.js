import React from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
// import useInputPage from '../../hooks/Page/useInputPage';
import { useSelector, useDispatch } from 'react-redux';
import {setItems, setCurrentPage, addItem, updateItem, removeItem} from '../../features/game/gameSlice';

const InputPage = () => {
    const topic = useSelector((state) => state.game.topic);
    const dispatch = useDispatch();
    const items = useSelector((state) => state.game.items);

    const handleAddItem = () => {
        dispatch(addItem());
    };

    const handleItemChange = (index, value) => {
        dispatch(updateItem({ index, value }));
    };

    const handleRemoveItem = (index) => {
        dispatch(removeItem(index));
    };

    const handleSubmit = (rows) => {
        // Logic to handle submission
        dispatch(setItems(convertRowsToItems(rows))); // Example conversion function
        dispatch(setCurrentPage('MATCHUP_PAGE'));
    };


    return (
        <div>
            <h2>{topic}</h2>
            <table>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                <InputField value={row} onChange={(e) => handleItemChange(index, e.target.value)} placeholder={index === 0 ? 'e.g. apricots' : index === 1 ? 'e.g. blueberries' : index === 2 ? 'e.g. persimmons' : 'Enter an item'}/>
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
            <Button onClick={handleAddItem}>Add Item</Button>
            <Button onClick={() => handleSubmit(rows)}>Submit</Button>
            <p><i>Click "Submit" to begin</i></p>
        </div>
    );
};

export default InputPage;
