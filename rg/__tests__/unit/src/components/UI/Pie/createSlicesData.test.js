// createSlicesData.test.js
import { createSlicesData } from '../../../../../../src/components/UI/Pie/CreateSlicesData';

describe('createSlicesData function', () => {
    it('should create an array of slice objects with correct areas', () => {
        const totalChoices = 4;
        const slices = createSlicesData(totalChoices);
        expect(slices).toEqual([
            { id: 1, area: 0.25 },
            { id: 2, area: 0.5 },
            { id: 3, area: 0.75 },
            { id: 4, area: 1 }
        ]);
    });
});
