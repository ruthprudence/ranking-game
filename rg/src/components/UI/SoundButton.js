import React from 'react';
// import eatFruit from '../../assets/audio/pacman_eatfruit.wav'; 
import { useSelector } from 'react-redux';
import { loadSound, playSound } from '../../features/audio/audioSlice';
import { useDispatch } from 'react-redux';

const SoundButton = ({ onClick, children, eatFruit, ...props }) => {

    const dispatch = useDispatch();
    
    const muted = useSelector((state) => state.audio.muted);
    
    const handleClick = (e) => {
        if(!muted & eatFruit){
            dispatch(playSound(eatFruit));
            // new Audio(eatFruit).play();
        }
        
        if (onClick) {
            onClick(e);
        }
    };

    return <button onClick={handleClick} {...props}>{children}</button>;
};

export default SoundButton;
