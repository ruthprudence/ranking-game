import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputPage from '../../../../../src/components/Page/InputPage';

describe('InputPage Component', () => {
  it('renders correctly and handles input changes', () => {
    const { getByPlaceholderText, getByText } = render(<InputPage />);
    const input = getByPlaceholderText('Enter an item');
    fireEvent.change(input, { target: { value: 'Test Item' } });
    expect(input.value).toBe('Test Item');

    fireEvent.click(getByText('Add Item'));
    // Additional assertions for the Add Item functionality
  });

  it('submits items correctly', () => {
    const { getByText } = render(<InputPage />);
    fireEvent.click(getByText('Submit'));
    // Assertions to check if submit functionality works as expected
  });
});
