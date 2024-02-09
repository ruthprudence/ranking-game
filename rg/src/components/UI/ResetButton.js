import React from 'react';
import uhOh from '../../assets/audio/pacman_death.wav'; 
import { useSelector } from 'react-redux';

const ResetButton = ({ onClick, children, ...props }) => {

    const muted = useSelector((state) => state.sound.muted);

    const handleClick = (e) => {
        if(!muted){
            new Audio(uhOh).play(); 
        }
        
        
        if (onClick) {
            onClick(e);
        }
    };

    return <button onClick={handleClick} {...props}>{children}</button>;
};

export default ResetButton;
