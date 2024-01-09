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

      it('should maintain consistent order for items with tied scores', () => {
        const scores = { itemA: 2, itemB: 2, itemC: 2, itemD: 1 };
        const firstRun = getSortedChoices(scores);
        const secondRun = getSortedChoices(scores);

        expect(firstRun).toEqual(secondRun);
    });

    it('should correctly handle scores with negative values', () => {
        const scores = { item1: -1, item2: -3, item3: -2 };
        const expectedSortedChoices = [['item2', -3], ['item3', -2], ['item1', -1]];

        const sortedChoices = getSortedChoices(scores);

        expect(sortedChoices).toEqual(expectedSortedChoices);
    });

    it('should maintain a consistent order for items with tied scores', () => {
        const scores = { itemA: 2, itemB: 2, itemC: 1 };
        const firstRun = getSortedChoices(scores);
        const secondRun = getSortedChoices(scores);
      
        expect(firstRun).toEqual(secondRun);
      });
      
      it('should correctly sort large datasets', () => {
        const scores = {};
        for (let i = 0; i < 1000; i++) {
          scores['item' + i] = Math.floor(Math.random() * 100);
        }
        const sortedChoices = getSortedChoices(scores);
      
        expect(sortedChoices).toBeSorted({ key: 1, descending: true });
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

    it('should handle edge cases with negative scores and ties', () => {
        const scores = { item1: -1, item2: -1, item3: -3 };
        const expected = [['item1', -1, 1], ['item2', -1, 1], ['item3', -3, 3]];
      
        expect(getTieAdjustedRankings(scores)).toEqual(expected);
      });
      
      it('should handle a single item in the dataset', () => {
        const scores = { item1: 3 };
        const expected = [['item1', 3, 1]];
      
        expect(getTieAdjustedRankings(scores)).toEqual(expected);
      });
      

    // it('should correctly assign ranks with a mix of zero and non-zero scores', () => {
    //     const scores = { item1: 3, item2: 2, item3: 0, item4: 2, item5: 0 };
    //     const expected = [['item1', 3, 1], ['item2', 2, 2], ['item4', 2, 2], ['item3', 0, 4], ['item5', 0, 4]];
      
    //     expect(getTieAdjustedRankings(scores)).toEqual(expected);
    //   });
      
      it('should assign the same rank to all items when all scores are zero', () => {
        const scores = { item1: 0, item2: 0, item3: 0 };
        const expected = [['item1', 0, 1], ['item2', 0, 1], ['item3', 0, 1]];
      
        expect(getTieAdjustedRankings(scores)).toEqual(expected);
      });
      
      it('should correctly handle a large number of ties', () => {
        const scores = {};
        for (let i = 0; i < 1000; i++) {
          scores['item' + i] = i % 10; // Creating ties every 10 items
        }
        const rankings = getTieAdjustedRankings(scores);
        expect(rankings).toHaveLength(1000);

      });
      
});