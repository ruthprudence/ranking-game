import { useState, useEffect } from 'react';

const usePairGenerator = (numItems) => {
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    const generatePairs = () => {
      const pairs = [];
      for (let i = 0; i < numItems; i++) {
        for (let j = i + 1; j < numItems; j++) {
          pairs.push([i, j]);
        }
      }
      return pairs;
    };

    setPairs(generatePairs());
  }, [numItems]);

  return { pairs };
};

export default usePairGenerator;
