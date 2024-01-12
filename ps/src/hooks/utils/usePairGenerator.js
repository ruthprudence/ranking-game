import { useState, useEffect } from 'react';

const usePairGenerator = (numItems) => {
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    const generatePairs = () => {
      const pairs = [];
      for (let start = 1; start < numItems; start++) {
        for (let i = start; i < numItems; i++) {
          const left = i;
          const right = i - start;
          pairs.push([left, right]);
        }
      }
      return pairs;
    };

    setPairs(generatePairs());
  }, [numItems]);

  return { pairs };
};

export default usePairGenerator;
