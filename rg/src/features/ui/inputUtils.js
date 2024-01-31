import { MAXLENGTH } from "../constants";

export const sanitizeAndTruncate = (input, maxLength = MAXLENGTH) => {
    // Sanitize input to replace < and > with HTML entities
    const sanitizedInput = input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
    // Truncate input to the specified maxLength
    return sanitizedInput.length > maxLength ? sanitizedInput.substring(0, maxLength) : sanitizedInput;
};
