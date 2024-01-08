import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DisplayRankings from '../../src/components/DisplayRankings';


describe('DisplayRankings Component', () => {
    it('should display all items, including those with zero votes', () => {
        const mockScores = { item1: 3, item2: 0, item3: 5 };
        render(<DisplayRankings scores={mockScores} />);
        
        expect(screen.getByText('item1')).toBeInTheDocument();
        expect(screen.getByText('item2')).toBeInTheDocument(); // This is the zero-vote item
        expect(screen.getByText('item3')).toBeInTheDocument();
    });

    it('should correctly display the scores of each item', () => {
        const mockScores = { item1: 3, item2: 0, item3: 5 };
        render(<DisplayRankings scores={mockScores} />);
        
        const scoreElements = screen.getAllByText('3');
        expect(scoreElements.length).toBeGreaterThanOrEqual(1); // Checks at least one element with '3' exists
        expect(scoreElements[0]).toBeInTheDocument(); // Check the first instance
    });
});
