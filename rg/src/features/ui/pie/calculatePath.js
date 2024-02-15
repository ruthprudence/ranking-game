// calculatePath.js
const calculatePath = (radius, startAngle, endAngle, isBorder = false) => {
  // Convert angles to radians for x and y coordinates
  const startX = radius + radius * Math.cos(Math.PI * startAngle / 180);
  const startY = radius + radius * Math.sin(Math.PI * startAngle / 180);
  const endX = radius + radius * Math.cos(Math.PI * endAngle / 180);
  const endY = radius + radius * Math.sin(Math.PI * endAngle / 180);
  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

  if (isBorder) {
    // Return path for the arc only
    return `M ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY}`;
  } else {
    // Return path for the entire slice
    return `M ${radius},${radius} L ${startX},${startY} A ${radius},${radius} 0 ${largeArcFlag} 1 ${endX},${endY} Z`;
  }
};

export default calculatePath;
