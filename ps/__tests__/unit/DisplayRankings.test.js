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
    
        // Handle multiple elements with the same score
        const scoreElements = screen.getAllByText('3');
        expect(scoreElements.length).toBeGreaterThanOrEqual(1); // Check at least one '3' exists
        expect(scoreElements[0]).toBeInTheDocument(); // Check the first instance of '3'
        expect(screen.getByText('0')).toBeInTheDocument(); // Specifically checking for the '0' score
        expect(screen.getByText('5')).toBeInTheDocument();
    });
    

    it('should correctly display the scores of each item', () => {
        const mockScores = { item1: 3, item2: 0, item3: 5 };
        render(<DisplayRankings scores={mockScores} />);
        
        expect(screen.getByText('item1').nextSibling.textContent).toBe('3');
        expect(screen.getByText('item2').nextSibling.textContent).toBe('0'); // Check if item2's score is '0'
        expect(screen.getByText('item3').nextSibling.textContent).toBe('5');
    });
});
