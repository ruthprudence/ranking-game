// src/utils/createItemsWithVotes.js
export const createItemsWithVotes = (rows) => {
    return rows.map((row, index) => ({
        id: `${index + 1} - ${row}`, 
        name: row,
        votes: 0
    }));
};
