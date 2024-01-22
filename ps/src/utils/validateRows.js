import { MAXCHOICES, MINCHOICES } from './constants';

export const validateRows = (rows) => {
    if (rows.some(row => !row.trim())) {
        alert('All items must be filled in.');
        return false;
    }
    if (rows.length < MINCHOICES || rows.length > MAXCHOICES) {
        alert(`Please enter between ${MINCHOICES} and ${MAXCHOICES} items.`);
        return false;
    }
    return true;
};