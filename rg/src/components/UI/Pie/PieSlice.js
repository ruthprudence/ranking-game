// PieSlice.js
import React from 'react';
import calculatePath from '../../../features/ui/pie/calculatePath'; 

const PieSlice = ({ index, totalSlices, radius }) => {
  const sliceDegree = 360 / totalSlices;
  const startAngle = index * sliceDegree;
  const endAngle = startAngle + sliceDegree;

  return (
    <path 
      d={calculatePath(radius, startAngle, endAngle)}
      fill={index % 2 === 0 ? 'blue' : 'lightblue'}
    />
  );
};

export default PieSlice;
