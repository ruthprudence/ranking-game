import { MAXCHOICES, MINCHOICES } from '../constants';
import { sanitizeAndTruncate } from '../utils/inputUtils'; // Import the utility function

export const validateRows = (rows) => {
    const processedRows = rows.map(row => sanitizeAndTruncate(row));

    if (processedRows.some(row => !row.trim())) {
        return { isValid: false, message: 'All items must be filled in.' };
    }
    if (processedRows.length < MINCHOICES || processedRows.length > MAXCHOICES) {
        return { isValid: false, message: `Please enter between ${MINCHOICES} and ${MAXCHOICES} items.` };
    }
    return { isValid: true, message: '' };
};
