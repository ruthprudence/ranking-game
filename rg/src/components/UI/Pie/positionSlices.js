// positionSlices.js

export const positionSlices = (slices, totalChoices) => {
    const positionedSlices = [];
  
    slices.forEach(slice => {
      const rotationAngle = (360 / totalChoices) * (slice.id - 1);
      positionedSlices.push({
        ...slice,
        rotationAngle: rotationAngle,
      });
    });
  
    return positionedSlices;
  };
  