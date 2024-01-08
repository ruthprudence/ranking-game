import { calculateScores } from '../../src/controller/PriorityController.js';

describe('PriorityModel', () => {
    it('should correctly calculate scores, including for items with no votes', () => {
        const choices = ['item1', 'item3'];
        const initialScores = { item1: 0, item2: 0, item3: 0, item4: 0 };

        const updatedScores = calculateScores(choices, initialScores);

        expect(updatedScores).toEqual({ item1: 1, item2: 0, item3: 1, item4: 0 });
    });

    it('should not create new items if they do not exist in initialScores', () => {
        const choices = ['item1', 'item3', 'item5'];
        const initialScores = { item1: 0, item2: 0, item3: 0 };

        const updatedScores = calculateScores(choices, initialScores);

        expect(updatedScores).toEqual({ item1: 1, item2: 0, item3: 1 });
    });
});
