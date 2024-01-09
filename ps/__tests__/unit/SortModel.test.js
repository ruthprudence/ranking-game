import { getTieAdjustedRankings, getSortedChoices } from '../../src/model/PriorityModel.js';

describe('getSortedChoices', () => {
    it('should correctly sort choices based on scores', () => {
      const scores = { item1: 1, item2: 3, item3: 2 };
      const expectedSortedChoices = [['item2', 3], ['item3', 2], ['item1', 1]];
  
      const sortedChoices = getSortedChoices(scores);
  
      expect(sortedChoices).toEqual(expectedSortedChoices);
    });
  
    it('should handle empty scores object', () => {
      const scores = {};
      const expectedSortedChoices = [];
  
      const sortedChoices = getSortedChoices(scores);
  
      expect(sortedChoices).toEqual(expectedSortedChoices);
    });
  
    it('should handle tie scores correctly', () => {
        const scores = { item1: 2, item2: 2, item3: 1 };
        console.log(`scores is ${JSON.stringify(scores)}`);
        const expectedSortedChoices = [['item1', 2], ['item2', 2], ['item3', 1]];
      
        const sortedChoices = getSortedChoices(scores);
      
        expect(sortedChoices).toHaveLength(3);
        expect(sortedChoices[0][1]).toEqual(sortedChoices[1][1]); // Check if item1 and item2 have the same score
        console.log(`sortedChoices is ${JSON.stringify(sortedChoices)}`);
        expect(sortedChoices).toEqual(expectedSortedChoices);
      });
  });

describe('getTieAdjustedRankings', () => {
    it('should handle cases with no ties', () => {
        const scores = { item1: 3, item2: 2, item3: 1 };
        const expected = [['item1', 3, 1], ['item2', 2, 2], ['item3', 1, 3]];

        expect(getTieAdjustedRankings(scores)).toEqual(expected);
    });

    it('should handle cases with a single tie', () => {
        const scores = { item1: 2, item2: 2, item3: 1 };
        const expected = [['item1', 2, 1], ['item2', 2, 1], ['item3', 1, 3]];

        expect(getTieAdjustedRankings(scores)).toEqual(expected);
    });

    it('should handle cases with multiple consecutive ties', () => {
        const scores = { item1: 2, item2: 2, item3: 2, item4: 1 };
        const expected = [['item1', 2, 1], ['item2', 2, 1], ['item3', 2, 1], ['item4', 1, 4]];

        expect(getTieAdjustedRankings(scores)).toEqual(expected);
    });

    it('should handle cases with multiple separate ties', () => {
        const scores = { item1: 3, item2: 2, item3: 2, item4: 1, item5: 1 };
        const expected = [['item1', 3, 1], ['item2', 2, 2], ['item3', 2, 2], ['item4', 1, 4], ['item5', 1, 4]];

        expect(getTieAdjustedRankings(scores)).toEqual(expected);
    });

    it('should handle cases with all items tied', () => {
        const scores = { item1: 1, item2: 1, item3: 1 };
        const expected = [['item1', 1, 1], ['item2', 1, 1], ['item3', 1, 1]];

        expect(getTieAdjustedRankings(scores)).toEqual(expected);
    });

    it('should handle cases with zero scores', () => {
        const scores = { item1: 0, item2: 0, item3: 0 };
        const expected = [['item1', 0, 1], ['item2', 0, 1], ['item3', 0, 1]];

        expect(getTieAdjustedRankings(scores)).toEqual(expected);
    });

});