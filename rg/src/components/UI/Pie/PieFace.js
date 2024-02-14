// PieFace.js
import PieSlice from "./PieSlice";

const PieFace = ({ totalSlices, currentSliceIndex }) => {
  const slices = [];

  for (let i = 0; i < currentSliceIndex; i++) {
    const startAngle = (360 / totalSlices) * i;
    const endAngle = startAngle + (360 / totalSlices);
    slices.push(<PieSlice key={i} startAngle={startAngle} endAngle={endAngle} />);
  }

  return <div className="pieFace">{slices}</div>;
};

export default PieFace;
