import React from 'react';
import uhOh from '../../assets/audio/pacman_death.wav'; 

const ResetButton = ({ onClick, children, ...props }) => {
    const handleClick = (e) => {
        new Audio(uhOh).play(); 
        
        if (onClick) {
            onClick(e);
        }
    };

    return <button onClick={handleClick} {...props}>{children}</button>;
};

export default ResetButton;
