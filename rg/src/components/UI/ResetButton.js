import React from 'react';
import { useSelector } from 'react-redux';

const ResetButton = ({ onClick, children, ...props }) => {

    const muted = useSelector((state) => state.audio.muted);

    const handleClick = (e) => {
        // if(!muted){
        //     new Audio(uhOh).play(); 
        // }
        
        
        if (onClick) {
            onClick(e);
        }
    };

    return <button onClick={handleClick} {...props}>{children}</button>;
};

export default ResetButton;
