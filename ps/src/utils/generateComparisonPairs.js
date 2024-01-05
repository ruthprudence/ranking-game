const generateComparisonPairs = (numItems) => {
    const pairs = [];
    for (let row = 0; row < numItems - 1; row++) {
      for (let col = row + 1; col < numItems; col++) {
        pairs.push([col, row]);
      }
    }
    return pairs;
  };
  
  export default generateComparisonPairs;
  