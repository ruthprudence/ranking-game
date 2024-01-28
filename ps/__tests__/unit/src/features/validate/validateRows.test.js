import { validateRows } from '../../../../../src/features/validate/validateRows';
import { MAXCHOICES, MINCHOICES } from '../../../../../src/features/constants';

describe('validateRows utility function', () => {
  // Mock window.alert
  global.alert = jest.fn();

  it('should return true for valid rows', () => {
    const validRows = Array.from({ length: MINCHOICES }, (_, i) => `Item ${i + 1}`);
    const result = validateRows(validRows);
    expect(result.isValid).toBe(true);
    expect(result.message).toBe('');
});


it('should return false and a message for empty row', () => {
  const rowsWithEmpty = ['Item 1', ''];
  const result = validateRows(rowsWithEmpty);
  expect(result.isValid).toBe(false);
  expect(result.message).toBe('All items must be filled in.');
});


it('should return false and a message for too few rows', () => {
  const fewRows = Array.from({ length: MINCHOICES - 1 }, (_, i) => `Item ${i + 1}`);
  const result = validateRows(fewRows);
  expect(result.isValid).toBe(false);
  expect(result.message).toBe(`Please enter between ${MINCHOICES} and ${MAXCHOICES} items.`);
});


it('should return false and a message for too many rows', () => {
  const manyRows = Array.from({ length: MAXCHOICES + 1 }, (_, i) => `Item ${i + 1}`);
  const result = validateRows(manyRows);
  expect(result.isValid).toBe(false);
  expect(result.message).toBe(`Please enter between ${MINCHOICES} and ${MAXCHOICES} items.`);
});

});
