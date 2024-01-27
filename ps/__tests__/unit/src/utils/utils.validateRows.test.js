import { validateRows } from '../../../../src/utils/ui/validateRows';
import { MAXCHOICES, MINCHOICES } from '../../../../src/utils/ui/constants';

describe('validateRows utility function', () => {
  // Mock window.alert
  global.alert = jest.fn();

  it('should return true for valid rows', () => {
    const validRows = Array.from({ length: MINCHOICES }, (_, i) => `Item ${i + 1}`);
    expect(validateRows(validRows)).toBe(true);
    expect(global.alert).not.toHaveBeenCalled();
  });

  it('should alert and return false for empty row', () => {
    const rowsWithEmpty = ['Item 1', ''];
    expect(validateRows(rowsWithEmpty)).toBe(false);
    expect(global.alert).toHaveBeenCalledWith('All items must be filled in.');
  });

  it('should alert and return false for too few rows', () => {
    const fewRows = Array.from({ length: MINCHOICES - 1 }, (_, i) => `Item ${i + 1}`);
    expect(validateRows(fewRows)).toBe(false);
    expect(global.alert).toHaveBeenCalledWith(`Please enter between ${MINCHOICES} and ${MAXCHOICES} items.`);
  });

  it('should alert and return false for too many rows', () => {
    const manyRows = Array.from({ length: MAXCHOICES + 1 }, (_, i) => `Item ${i + 1}`);
    expect(validateRows(manyRows)).toBe(false);
    expect(global.alert).toHaveBeenCalledWith(`Please enter between ${MINCHOICES} and ${MAXCHOICES} items.`);
  });
});
