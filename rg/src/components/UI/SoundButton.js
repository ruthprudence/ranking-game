import React from 'react';
import eatFruit from '../../assets/audio/pacman_eatfruit.wav'; 
import { useSelector } from 'react-redux';

const SoundButton = ({ onClick, children, ...props }) => {
    
    const muted = useSelector((state) => state.sound.muted);
    
    const handleClick = (e) => {
        if(!muted){
            new Audio(eatFruit).play();
        }
        
        if (onClick) {
            onClick(e);
        }
    };

    return <button onClick={handleClick} {...props}>{children}</button>;
};

export default SoundButton;
