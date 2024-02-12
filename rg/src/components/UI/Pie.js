const Pie = ({ currentPairIndex, totalPairs }) => {
  const slices = [];

  // The angle each slice should cover
  const sliceAngle = 360 / totalPairs;

  for (let i = 0; i < currentPairIndex; i++) {
    // Calculate the starting and ending angles for clip-path
    const startAngle = sliceAngle * i;
    const endAngle = sliceAngle * (i + 1);

    // Convert angles to radians for trigonometric calculations
    const startAngleRad = (Math.PI / 180) * startAngle;
    const endAngleRad = (Math.PI / 180) * endAngle;

    // Calculate clip-path coordinates
    const clipPath = `polygon(
      50% 50%, 
      ${50 + 50 * Math.cos(startAngleRad)}% ${50 + 50 * Math.sin(startAngleRad)}%, 
      ${50 + 50 * Math.cos(endAngleRad)}% ${50 + 50 * Math.sin(endAngleRad)}%
    )`;

    slices.push(
      <div 
        key={i}
        className="pie-slice" 
        style={{ clipPath: clipPath }}
      ></div>
    );
  }

  return (
    <div className="pie">
      {slices}
    </div>
  );
};

export default Pie;
