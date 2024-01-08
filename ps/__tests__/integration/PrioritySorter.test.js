import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from '../../src/App';

describe('Integration Test for PrioritySorter and DisplayRankings', () => {
    it('should process and display all items correctly, including those with zero votes', async () => {
        window.alert = jest.fn(); // Mocking window.alert
        const { getByPlaceholderText, getByText, getByRole } = render(<App />);

        // Enter topic and submit
        const topicInput = getByPlaceholderText('e.g. fruits');
        fireEvent.change(topicInput, { target: { value: 'Fruits' } });
        fireEvent.click(getByText('Submit Topic'));

        // Simulate user input and submission
        const firstItemInput = await waitFor(() => getByPlaceholderText('apples'));
        fireEvent.change(firstItemInput, { target: { value: 'Apples' } });

        const secondItemInput = getByPlaceholderText('bananas');
        fireEvent.change(secondItemInput, { target: { value: 'Bananas' } });

        const thirdItemInput = getByPlaceholderText('cranberries');
        fireEvent.change(thirdItemInput, { target: { value: 'Cranberries' } });

        fireEvent.click(getByText('Submit'));

        fireEvent.click(getByText('Apples'));
        fireEvent.click(getByText('Bananas'));
        fireEvent.click(getByText('Apples'));




        // Check for zero scores, update this based on your application's score display logic
        expect(getByRole('cell', { name: '0' })).toBeInTheDocument();
    });
});
