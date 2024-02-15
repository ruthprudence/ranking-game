import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ResetButton = ({ onClick, children, ...props }) => {
    const dispatch = useDispatch();
    const muted = useSelector((state) => state.audio.muted);

    const handleClick = (e) => {
        // if(!muted){
        //     new Audio(uhOh).play(); 
        // }
        
        dispatch({ type: 'RESET_PIE' });
        
        if (onClick) {
            onClick(e);
        }
    };

    return <button onClick={handleClick} {...props}>{children}</button>;
};

export default ResetButton;
