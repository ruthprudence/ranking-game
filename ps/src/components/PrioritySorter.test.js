import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PrioritySorter from '../../components/PrioritySorter';

describe('PrioritySorter Component', () => {
  test('shows an alert when trying to submit with an incomplete field', () => {
    // Mock the global alert function
    window.alert = jest.fn();

    render(<PrioritySorter />);

    // Assuming there's a submit button in your component
    const submitButton = screen.getByRole('button', { name: /submit/i });

    // Fire a click event on the submit button
    fireEvent.click(submitButton);

    // Check if the alert was called
    expect(window.alert).toHaveBeenCalledWith("Please fill in all entries before submitting.");
  });
});
