import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('test', () => {
  render(<App />);
  expect(true).toBe(true);
});
