

// PieSlice.js
import React from 'react';
import calculatePath from '../../../features/ui/pie/calculatePath';

const PieSlice = ({ index, totalSlices, radius }) => {
  const sliceDegree = 360 / totalSlices;
  const startAngle = index * sliceDegree;
  const endAngle = startAngle + sliceDegree;
  const path = calculatePath(radius, startAngle, endAngle);

  // Create a path for the arc border
  const borderPath = calculatePath(radius, startAngle, endAngle, true); // Adjust the calculatePath function to create a path for the border

  return (
    <>
        <path 
            className="pie-slice" // Apply the class for animation
            d={path} 
            fill="yellow"
        />
        <path 
            d={borderPath} 
            fill="none" 
            stroke="black" 
            strokeWidth="1"
            className="pie-slice"
        />
    </>
);
};

export default PieSlice;