// Pie.js
import React from 'react';
import renderSlices from '../../../features/ui/pie/renderSlices'; 

const Pie = () => {
  const radius = 50; // Radius of the pie chart
  const viewBoxSize = 100; // SVG viewbox size
  const totalSlices = 3; // Number of slices to draw

  return (
    <svg width={`${viewBoxSize}px`} height={`${viewBoxSize}px`} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
      {renderSlices(totalSlices, radius)}
    </svg>
  );
};

export default Pie;
