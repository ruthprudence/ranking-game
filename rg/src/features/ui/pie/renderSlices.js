// renderSlices.js
import React from 'react';
import PieSlice from '../../../components/UI/Pie/PieSlice'; 

const renderSlices = (filledSlices, totalSlices, radius) => {
  console.log(`Rendering ${filledSlices} of ${totalSlices} slices.`);
  return Array.from({ length: filledSlices }, (_, index) => (
    <PieSlice key={index} index={index} totalSlices={totalSlices} radius={radius} />
  ));
};

export default renderSlices;