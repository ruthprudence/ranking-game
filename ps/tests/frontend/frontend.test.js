import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders the PrioritySorter component', () => {
  render(<App />);
  const prioritySorterElement = screen.getByText(/rock/i);
  expect(prioritySorterElement).toBeInTheDocument();
});
