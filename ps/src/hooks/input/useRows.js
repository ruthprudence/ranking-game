// useRows.js
import { useState } from 'react';
import { MAXCHOICES, MINCHOICES } from '../../utils/constants'; 

const useRows = (initialRows) => {
  const [rows, setRows] = useState(initialRows || []);

  const addRow = (newRow = '') => {
    if (rows.length < MAXCHOICES) {
      setRows([...rows, newRow]);
    }
  };

  const removeRow = (index) => {
    if (rows.length > MINCHOICES) {
      const newRows = [...rows];
      newRows.splice(index, 1);
      setRows(newRows);
    } else {
      alert(`Cannot remove. You must have at least ${MINCHOICES} items.`);
    }
  };

  const updateRow = (index, updatedValue) => {
    if (index >= 0 && index < rows.length) {
      setRows(rows.map((row, i) => (i === index ? updatedValue : row)));
    }
  };

  return { rows, addRow, removeRow, updateRow };
};

export default useRows;
