import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const SoundButton = ({ onClick, children, soundName, isDisabled, ...props }) => {
    const [isClicked, setIsClicked] = useState(false);
    const muted = useSelector((state) => state.audio.muted);
    // const buttonClass = `${isClicked ? 'button-clicked' : ''} ${isDisabled ? 'button-disabled' : 'button-enabled'}`;
    const buttonClass = isDisabled ? 'button-disabled' : 'button-enabled';

    const handleClick = (e) => {
        if (!muted) {
            const audioElement = document.getElementById(soundName);
            if (audioElement) {
                // Create a new Audio object for each click
                const newAudio = new Audio(audioElement.src);
                newAudio.play().catch(error => console.error(`Error playing sound: ${soundName}`, error));
            }
        }

        if (onClick) {
            onClick(e);
        }

        setIsClicked(true); // Set the button as clicked
        setTimeout(() => setIsClicked(false), 550); // Remove the class after 400ms
    };

    return (
        <button
            className={buttonClass}
            onClick={handleClick}
            disabled={isDisabled}
            {...props}
            >{children}
        </button>
    );
};


export default SoundButton;
