import matchupReducer, { handleChoice } from '../../../../../src/features/matchup/matchupSlice';

describe('handleChoice reducer', () => {
    it('should increment the vote of the selected item', () => {
        const initialState = {
            items: [{ name: 'Item1', votes: 0 }, { name: 'Item2', votes: 0 }],
            currentPairIndex: 0,
        };
        const action = handleChoice('Item1');
        const newState = matchupReducer(initialState, action);
        expect(newState.items.find(item => item.name === 'Item1').votes).toBe(1);
        expect(newState.items.find(item => item.name === 'Item2').votes).toBe(0);
        expect(newState.currentPairIndex).toBe(1);
    });

    it('should not affect items not selected', () => {
        const initialState = {
            items: [{ name: 'Item1', votes: 0 }, { name: 'Item2', votes: 0 }],
            currentPairIndex: 0,
        };
        const action = handleChoice('Item3');
        const newState = matchupReducer(initialState, action);
        expect(newState.items.find(item => item.name === 'Item1').votes).toBe(0);
        expect(newState.items.find(item => item.name === 'Item2').votes).toBe(0);
        expect(newState.currentPairIndex).toBe(1);
    });

    it('should handle case where selected item is not in the list', () => {
        const initialState = {
            items: [{ name: 'Item1', votes: 0 }, { name: 'Item2', votes: 0 }],
            currentPairIndex: 0,
        };
        const action = handleChoice('NonExistentItem');
        const newState = matchupReducer(initialState, action);
        expect(newState.items.find(item => item.name === 'Item1').votes).toBe(0);
        expect(newState.items.find(item => item.name === 'Item2').votes).toBe(0);
        expect(newState.currentPairIndex).toBe(1);
    });
});
