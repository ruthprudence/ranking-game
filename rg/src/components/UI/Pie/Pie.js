// Pie.js
import React from 'react';
import renderSlices from '../../../features/ui/pie/renderSlices';
import { useSelector, useDispatch } from 'react-redux';

const Pie = () => {
  const dispatch = useDispatch();
  const { totalSlices, filledSlices } = useSelector((state) => state.pie);
  const radius = 50;
  const viewBoxSize = 100;

  // Function to handle adding a slice
  const handleAddSlice = () => {
    dispatch({ type: 'ADD_SLICE' });
  };

  return (
    <>
      <svg width={`${viewBoxSize}px`} height={`${viewBoxSize}px`} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
        {renderSlices(filledSlices, totalSlices, radius)}
      </svg>
      <button onClick={handleAddSlice}>Add Slice (Vote)</button>
    </>
  );
};

export default Pie;
