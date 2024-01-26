import { createItemsWithVotes } from '../../../../src/utils/matchup/createItemsWithVotes';

describe('createItemsWithVotes utility function', () => {
    it('should create items with initial votes set to 0', () => {
        const rows = ['Item 1', 'Item 2', 'Item 3'];
        const items = createItemsWithVotes(rows);
        expect(items).toEqual([
            { id: 0, name: 'Item 1', votes: 0 },
            { id: 1, name: 'Item 2', votes: 0 },
            { id: 2, name: 'Item 3', votes: 0 }
        ]);
    });

    it('should handle an empty array', () => {
        const rows = [];
        const items = createItemsWithVotes(rows);
        expect(items).toEqual([]);
    });

    it('should assign unique ids based on index', () => {
        const rows = ['Item A', 'Item B'];
        const items = createItemsWithVotes(rows);
        expect(items[0].id).toBe(0);
        expect(items[1].id).toBe(1);
    });
});
