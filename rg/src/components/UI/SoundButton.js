import React from 'react';
import eatFruit from '../../assets/audio/pacman_eatfruit.wav'; 

const SoundButton = ({ onClick, children, ...props }) => {
    const handleClick = (e) => {
        new Audio(eatFruit).play(); 
        
        if (onClick) {
            onClick(e);
        }
    };

    return <button onClick={handleClick} {...props}>{children}</button>;
};

export default SoundButton;
