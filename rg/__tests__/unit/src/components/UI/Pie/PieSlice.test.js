/**
 * @jest-environment jsdom
 */

// PieSlice.test.js
import React from 'react';
import { render } from '@testing-library/react';
import PieSlice from '../../../../../../src/components/UI/Pie/PieSlice';

describe('PieSlice component', () => {
    it('should apply correct styles based on area and rotationAngle props', () => {
        const { getByTestId } = render(<PieSlice area={0.5} rotationAngle={90} />);
        const slice = getByTestId('slice');
        expect(slice.style.transform).toBe('rotate(90deg)');
        // Additional assertions for other styles if necessary
    });
});
