// renderSlices.js
import React from 'react';
import PieSlice from '../../../components/UI/Pie/PieSlice'; 

const renderSlices = (totalSlices, radius) => {
  const slices = [];
  const sliceDegree = 360 / totalSlices;

  for (let i = 0; i < totalSlices; i++) {
    slices.push(
      <PieSlice key={i} index={i} totalSlices={totalSlices} radius={radius} />
    );
  }
  return slices;
};

export default renderSlices;
