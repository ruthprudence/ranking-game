// Row.js
import React from 'react';
import InputField from './InputField';
import SoundButton from './SoundButton';
import { PLACEHOLDERS } from '../../features/constants';

const Row = ({ row, index, handleClearRow, handleItemChange, handleRemoveRow }) => {
  const rowAnimationClass = row.animate === 'in' ? 'row-slide-in' : row.animate === 'out' ? 'row-slide-out' : '';

  return (
    <tr className={`inputRow ${rowAnimationClass}`}>
      <td className="index-column">{index + 1}</td>
      <td className="input-field-cell">
        <InputField 
          value={row.value} 
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
    
  );
};

export default Row;
