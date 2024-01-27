import { pairingLogic } from '../../../../src/utils/matchup/pairingLogic';

describe('pairingLogic utility function', () => {
    it('should generate correct pairs for given items', () => {
        const items = [{ id: 0, name: 'Item 1' }, { id: 1, name: 'Item 2' }, { id: 2, name: 'Item 3' }];
        const expectedPairs = [[1, 0], [2, 1], [2, 0]];

        const resultPairs = pairingLogic(items);

        expect(resultPairs).toEqual(expectedPairs);
    });

    it('should return an empty array when not enough items are provided', () => {
        const itemsWithOneElement = [{ id: 0, name: 'Item 1' }];
        const expectedPairs = [];

        const resultPairs = pairingLogic(itemsWithOneElement);

        expect(resultPairs).toEqual(expectedPairs);
    });

    it('should handle an empty items array', () => {
        const emptyItems = [];
        const expectedPairs = [];

        const resultPairs = pairingLogic(emptyItems);

        expect(resultPairs).toEqual(expectedPairs);
    });
});
