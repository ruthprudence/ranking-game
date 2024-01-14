import React from 'react';
import { render } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom/extend-expect'; // Add this import
import MatchupPage from '../../../../../src/components/Page/MatchupPage';

describe('MatchupPage Component', () => {
    it('renders choice buttons correctly', () => {
        const { getByText } = render(<MatchupPage items={['Item 1', 'Item 2']} />);
        expect(getByText('Item 1')).toBeInTheDocument();
        expect(getByText('Item 2')).toBeInTheDocument();
    });
});
