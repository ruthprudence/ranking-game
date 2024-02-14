// positionSlices.test.js
import { positionSlices } from '../../../../../../src/components/UI/Pie/positionSlices';

describe('positionSlices function', () => {
    it('should correctly position each slice based on total choices', () => {
        const slices = [{ id: 1, area: 0.25 }, { id: 2, area: 0.5 }];
        const totalChoices = 4;
        const positionedSlices = positionSlices(slices, totalChoices);
        expect(positionedSlices).toEqual([
            { id: 1, area: 0.25, rotationAngle: 0 },
            { id: 2, area: 0.5, rotationAngle: 90 }
        ]);
    });
});
