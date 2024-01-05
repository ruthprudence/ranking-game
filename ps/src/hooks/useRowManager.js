import { useState } from 'react';
import { MAXCHOICES } from '../utils/constants'; 

const useRowManager = (initialRows) => {
  const [rows, setRows] = useState(initialRows);

  const addRow = () => {
    if (rows.length < MAXCHOICES) {
      setRows([...rows, '']);
    }
  };

  const removeRow = (index) => {
    const newRows = [...rows];
    newRows.splice(index, 1);
    setRows(newRows);
  };

  const updateRow = (index, value) => {
    const newRows = [...rows];
    newRows[index] = value;
    setRows(newRows);
  };

  return { rows, addRow, removeRow, updateRow };
};

export default useRowManager;
