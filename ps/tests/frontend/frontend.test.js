/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import MyComponent from '../MyComponent';
import { server } from './mocks/server';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../src/App';

test('renders the PrioritySorter component', () => {
  render(<App />);
//   const prioritySorterElement = screen.getByText(/rock/i);
//   expect(prioritySorterElement).toBeInTheDocument();
  const inputElement = screen.getByDisplayValue(/rock/i);
expect(inputElement).toBeInTheDocument();

});

test('', () => {});

test('loads and displays data', async () => {
  render(<MyComponent />);
  expect(await screen.findByText('mocked value')).toBeInTheDocument();
});