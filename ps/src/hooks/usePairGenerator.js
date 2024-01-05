import { useState, useEffect } from 'react';
import generateComparisonPairs from '../utils/generateComparisonPairs';

const usePairGenerator = (rows) => {
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    setPairs(generateComparisonPairs(rows.length));
  }, [rows]);

  return { pairs };
};

export default usePairGenerator;
