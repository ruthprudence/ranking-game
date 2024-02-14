// PieSlice.js
import React from 'react';
import calculatePath from '../../../features/ui/pie/calculatePath';

const PieSlice = ({ index, totalSlices, radius }) => {
  const sliceDegree = 360 / totalSlices;
  const startAngle = index * sliceDegree;
  const endAngle = startAngle + sliceDegree;
  const path = calculatePath(radius, startAngle, endAngle);
  console.log(`Slice ${index}: ${path}`);

  return (
    <path d={path} fill={index % 2 === 0 ? 'blue' : 'lightblue'} />
  );
};

export default PieSlice;
