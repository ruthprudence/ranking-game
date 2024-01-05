import { useState, useEffect } from 'react';

const usePairGenerator = (rows) => {
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    const newPairs = [];
    for (let i = 0; i < rows.length - 1; i++) {
      for (let j = i + 1; j < rows.length; j++) {
        newPairs.push([i, j]);
      }
    }
    setPairs(newPairs);
  }, [rows]);

  return { pairs };
};

export default usePairGenerator;
