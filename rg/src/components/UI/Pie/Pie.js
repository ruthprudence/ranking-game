// Pie.js
import React from 'react';
import renderSlices from '../../../features/ui/pie/renderSlices'; 
import { useSelector } from 'react-redux';

const Pie = () => {
  const { totalSlices, filledSlices } = useSelector((state) => state.pie);
  const radius = 50;
  const viewBoxSize = 100;

  return (
    <svg className="pie-svg" width={`${viewBoxSize}px`} height={`${viewBoxSize}px`} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
      {renderSlices(filledSlices, totalSlices, radius)}
    </svg>
  );
};

export default Pie;
