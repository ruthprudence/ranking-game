/**
 * validateRows
 * 
 * 
 */

import { MAXCHOICES, MINCHOICES } from '../ui/constants';

export const validateRows = (rows) => {
    if (rows.some(row => !row.trim())) {
        return { isValid: false, message: 'All items must be filled in.' };
    }
    if (rows.length < MINCHOICES || rows.length > MAXCHOICES) {
        return { isValid: false, message: `Please enter between ${MINCHOICES} and ${MAXCHOICES} items.` };
    }
    return { isValid: true, message: '' };
};
