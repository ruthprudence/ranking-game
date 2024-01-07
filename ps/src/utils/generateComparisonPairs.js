const generateComparisonPairs = (numItems) => {
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

export default generateComparisonPairs;

  