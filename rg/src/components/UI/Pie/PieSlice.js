// PieSlice.js
const PieSlice = ({ isVisible, sliceAngle, rotationAngle }) => {
    // The clip-path for a semi-circle slice
    const clipPath = `polygon(50% 50%, 100% 0, 100% 100%)`;
  
    return (
      <div
        className="pie-slice"
        style={{
          transform: `rotate(${rotationAngle}deg)`,
          clipPath,
          transformOrigin: '50% 50%',
          backgroundColor: isVisible ? 'blue' : 'transparent',
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '0',
          left: '0',
        }}
      ></div>
    );
  };
  
  export default PieSlice;