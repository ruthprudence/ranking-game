// createSlicesData.js

export const createSlicesData = (totalChoices) => {
    const slices = [];
    const sliceArea = 1 / totalChoices;
  
    for (let i = 1; i <= totalChoices; i++) {
      slices.push({
        id: i,
        area: sliceArea * i,
      });
    }
  
    return slices;
  };
  