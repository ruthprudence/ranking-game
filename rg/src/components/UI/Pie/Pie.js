// Pie.js
import PieFace from "./PieFace";

const Pie = ({ currentPairIndex, totalPairs }) => {
  return (
    <div className="pie">
      <PieFace totalSlices={totalPairs} currentSliceIndex={currentPairIndex} />
    </div>
  );
};

export default Pie;
