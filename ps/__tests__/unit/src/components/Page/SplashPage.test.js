import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SplashPage from '../../../../../src/components/Page/SplashPage';

describe('SplashPage Component', () => {
  it('handles topic input and submission correctly', () => {
    const { getByPlaceholderText, getByText } = render(<SplashPage />);
    const input = getByPlaceholderText('Enter a topic');
    fireEvent.change(input, { target: { value: 'Test Topic' } });
    expect(input.value).toBe('Test Topic');

    fireEvent.click(getByText('Submit Topic'));
    // Assertions to check if submission functionality works as expected
  });
});
