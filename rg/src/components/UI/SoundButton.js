import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playSound } from '../../features/audio/audioSlice';

const SoundButton = ({ onClick, children, soundName, ...props }) => {

    const dispatch = useDispatch();
    
    const muted = useSelector((state) => state.audio.muted);
    
    const handleClick = (e) => {
        if(!muted && soundName){
            dispatch(playSound({ name: soundName }));
        }
        
        if (onClick) {
            onClick(e);
        }
    };

    return <button onClick={handleClick} {...props}>{children}</button>;
};

export default SoundButton;
