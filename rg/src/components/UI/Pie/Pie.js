// Pie.js
import PieSlice from "./PieSlice";
const Pie = ({ currentPairIndex, totalPairs }) => {
  const totalSlices = totalPairs - 1; // Total slices are one less than total pairs
  const sliceAngle = 360 / totalSlices; // Angle for each slice

  return (
    <div className="pie">
      {Array.from({ length: totalSlices }).map((_, index) => {
        const rotationAngle = sliceAngle * index;
        const isVisible = index < currentPairIndex; // Render slice only if it represents a completed vote
        return <PieSlice key={index} isVisible={isVisible} sliceAngle={sliceAngle} rotationAngle={rotationAngle} />;
      })}
    </div>
  );
};

export default Pie;