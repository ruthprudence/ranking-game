import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const MatchupButton = ({ onClick, children, soundName, isDisabled, className, ...props }) => {
    const [isClicked, setIsClicked] = useState(false);
    const muted = useSelector((state) => state.audio.muted);

    const handleClick = (e) => {

        if (!muted) {
            const audioElement = document.getElementById(soundName);
            if (audioElement) {
                const newAudio = new Audio(audioElement.src);
                newAudio.play().catch(error => console.error(`Error playing sound: ${soundName}`, error));
            }
        }

        if (onClick) {
            onClick(e);
        }

        setIsClicked(true);        
        setTimeout(() => {
            setIsClicked(false);
        }, 250); 
    };

 const buttonClass = `${className} ${isDisabled ? 'button-disabled' : 'button-enabled'}`;

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

export default MatchupButton;
