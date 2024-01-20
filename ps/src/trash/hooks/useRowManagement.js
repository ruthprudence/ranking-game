import { useState, useCallback } from 'react';
import { MAXCHOICES, MINCHOICES } from '../../utils/constants';

const useRowManagement = (initialRows = []) => {
  const [rows, setRows] = useState(initialRows);

  const addRow = useCallback((newRow = '') => {
    if (rows.length < MAXCHOICES) {
      setRows([...rows, newRow]);
    }
  }, [rows]);

  const removeRow = useCallback((index) => {
    if (rows.length > MINCHOICES) {
      const updatedRows = [...rows];
      updatedRows.splice(index, 1);
      setRows(updatedRows);
    }
  }, [rows]);

  const updateRow = useCallback((index, updatedValue) => {
    const updatedRows = rows.map((row, i) => (i === index ? updatedValue : row));
    setRows(updatedRows);
  }, [rows]);

  return { rows, addRow, removeRow, updateRow };
};

export default useRowManagement;
