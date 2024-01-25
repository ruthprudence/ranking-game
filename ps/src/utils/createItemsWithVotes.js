// src/utils/createItemsWithVotes.js
export const createItemsWithVotes = (rows) => {
    return rows.map((row, index) => ({
        id: index,
        name: row,
        votes: 0
    }));
};
