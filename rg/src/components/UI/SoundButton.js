import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playSound } from '../../features/audio/audioSlice';

const SoundButton = ({ onClick, children, soundName, ...props }) => {

    const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = (e) => {
        playSound(soundName);
        if (onClick) {
            onClick(e);
          }
        setIsClicked(true); // Set the button as clicked
        setTimeout(() => setIsClicked(false), 400); // Remove the class after 400ms

      
    };

    const buttonClass = isClicked ? 'button row-button-clicked' : 'button';

    return <button onClick={handleClick} {...props}>{children}</button>;
};

export default SoundButton;
