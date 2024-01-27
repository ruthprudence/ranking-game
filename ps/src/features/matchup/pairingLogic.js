export const pairingLogic = (items) => {
    const pairs = [];
    for (let start = 1; start < items.length; start++) {
        for (let row = start, col = 0; row < items.length; row++, col++) {
            pairs.push([row, col]);
        }
    }
    return pairs;
};