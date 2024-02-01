import React from 'react';
import { MAXLENGTH } from '../../features/constants'; // Import the MAXLENGTH constant

const InputField = ({ value, onChange, placeholder, ...props }) => {

    const handleInputChange = (e) => {
        // Check if the input length is within the MAXLENGTH limit
        if (e.target.value.length <= MAXLENGTH) {
            onChange(e); // If within limit, use the original onChange handler
        }
        // If the length exceeds MAXLENGTH, no action is taken
        // This effectively prevents adding more characters
    };

    return <input type="text" value={value} onChange={handleInputChange} placeholder={placeholder} {...props} />;
};

export default InputField;
