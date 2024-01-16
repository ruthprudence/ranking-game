// src/components/UI/InputField.js
import React from 'react';

const InputField = ({ value, onChange, placeholder, ...props }) => {
    return <input type="text" value={value} onChange={onChange} placeholder={placeholder} {...props} />;
};

export default InputField;
