import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { playSound } from '../../features/audio/soundPlayer';
import { SOUND_FILES } from '../../features/constants';

const MatchupButton = ({ onClick, children, soundName, isDisabled, className, playSoundInternally = true, ...props }) => {
    const [isClicked, setIsClicked] = useState(false);
    const muted = useSelector((state) => state.audio.muted);

    const handleClick = (e) => {

        
            if (playSoundInternally && !muted) {
                playSound(soundName, muted);
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
