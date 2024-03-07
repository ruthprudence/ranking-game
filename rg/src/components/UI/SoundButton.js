import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { playSound } from '../../features/audio/soundPlayer'; 

const SoundButton = ({ onClick, children, soundName, isDisabled, className, ...props }) => {
    const [isClicked, setIsClicked] = useState(false);
    const muted = useSelector((state) => state.audio.muted);

    const handleClick = (e) => {
        playSound(soundName, muted);

        if (onClick) {
            onClick(e);
        }

        setIsClicked(true);
        
        setTimeout(() => {
            setIsClicked(false);
        }, 250); 
    };

 const buttonClass = `${className} ${isClicked ? 'depress' : ''}`;

    return (
        <button
            className={buttonClass}
            onClick={handleClick}
            disabled={isDisabled}
            {...props}
        >
            {children}
        </button>
    );
};

export default SoundButton;
