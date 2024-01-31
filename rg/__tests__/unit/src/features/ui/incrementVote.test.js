// Import the necessary actions and reducer
import reducer, { incrementVote } from '../../../../../src/features/ui/uiSlice';

describe('uiSlice reducer', () => {
    describe('incrementVote action', () => {
        it('should increment the vote count of the selected item', () => {
            const initialState = {
                items: [
                    { id: 0, name: 'Item1', votes: 1 },
                    { id: 1, name: 'Item2', votes: 2 },
                    { id: 2, name: 'Item3', votes: 3 }
                ],
                // ... other state properties
            };

            // Simulate voting for the first item
            const action = incrementVote({ id: 0, name: 'Item1' });
            const newState = reducer(initialState, action);

            expect(newState.items[0].votes).toBe(2); // Expect the vote count of the first item to be incremented
            expect(newState.items[1].votes).toBe(2); // The vote count of other items should remain the same
            expect(newState.items[2].votes).toBe(3);
        });

        it('should not change the vote count if the item is not found', () => {
            const initialState = {
                items: [
                    { id: 0, name: 'Item1', votes: 1 },
                    { id: 1, name: 'Item2', votes: 2 }
                ],
                // ... other state properties
            };

            // Simulate voting for an item that does not exist
            const action = incrementVote({ id: 3, name: 'Item3' });
            const newState = reducer(initialState, action);

            // Expect no change in the vote count of existing items
            expect(newState.items[0].votes).toBe(1);
            expect(newState.items[1].votes).toBe(2);
        });

        // Additional tests can be added here for other edge cases or scenarios
    });
});
