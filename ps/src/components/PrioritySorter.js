import React, { useState } from 'react';

const MAXCHOICES = 13;

const PrioritySorter = () => {
  const [rows, setRows] = useState(['rock', 'paper', 'scissors']);
  const [choices, setChoices] = useState([]);
  const [sortedChoices, setSortedChoices] = useState([]);
  const [tieBreakers, setTieBreakers] = useState([]);
  const [counter, setCounter] = useState({});

  const addRow = () => {
    if (rows.length < MAXCHOICES) {
      setRows([...rows, '']);
    }
  };

  const removeRow = (index) => {
    if (rows.length > 3) {
      const newRows = [...rows];
      newRows.splice(index, 1);
      setRows(newRows);
    }
  };

  const updateRow = (index, value) => {
    const newRows = [...rows];
    newRows[index] = value;
    setRows(newRows);
  };

  const handleSubmit = () => {
    setChoices(rows);
  };

  // Additional logic for sorting, tie-breakers, and displaying results
  // will go here.

  return (
    <div>
      {rows.map((row, index) => (
        <div key={index}>
          <input
            type='text'
            value={row}
            onChange={(e) => updateRow(index, e.target.value)}
          />
          <button onClick={() => removeRow(index)}>Remove</button>
        </div>
      ))}
      {rows.length < MAXCHOICES -1  && <button onClick={addRow}>Add</button>} {/* Conditional rendering */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PrioritySorter;