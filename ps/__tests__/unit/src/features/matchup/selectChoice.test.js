import matchupReducer, { selectChoice } from '../../../../../src/features/matchup/matchupSlice';

describe('selectChoice reducer', () => {
    it('should increment the vote of the selected item', () => {
        const initialState = {
            items: [{ name: 'Item1', votes: 0 }, { name: 'Item2', votes: 0 }]
        };
        const action = selectChoice('Item1');
        const newState = matchupReducer(initialState, action);
        expect(newState.items.find(item => item.name === 'Item1').votes).toBe(1);
        expect(newState.items.find(item => item.name === 'Item2').votes).toBe(0);
    });

    it('should not affect items not selected', () => {
        const initialState = {
            items: [{ name: 'Item1', votes: 0 }, { name: 'Item2', votes: 0 }]
        };
        const action = selectChoice('Item3');
        const newState = matchupReducer(initialState, action);
        expect(newState.items.find(item => item.name === 'Item1').votes).toBe(0);
        expect(newState.items.find(item => item.name === 'Item2').votes).toBe(0);
    });
});
