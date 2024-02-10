import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playSound } from '../../features/audio/audioSlice';

const SoundButton = ({ onClick, children, soundName, ...props }) => {
    const dispatch = useDispatch();
    const muted = useSelector((state) => state.audio.muted);
    const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = (e) => {
        setIsClicked(true); // Set the button as clicked
        setTimeout(() => setIsClicked(false), 400); // Remove the class after 400ms

        if(!muted && soundName){
            dispatch(playSound({ name: soundName }));
        }
        
        if (onClick) {
            onClick(e);
        }
    };
    const buttonClass = isClicked ? 'button row-button-clicked' : 'button';

    return <button onClick={handleClick} {...props}>{children}</button>;
};

export default SoundButton;
