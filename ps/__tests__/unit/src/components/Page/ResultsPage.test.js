import React from 'react';
import { render } from '@testing-library/react';
import ResultsPage from '../../../../../src/components/Page/ResultsPage';

describe('ResultsPage Component', () => {
    it('renders rankings table correctly', () => {
        render(<ResultsPage items={['Item 1', 'Item 2']} />);
        // Assertions to check if the table is rendered with correct data
    });
});
