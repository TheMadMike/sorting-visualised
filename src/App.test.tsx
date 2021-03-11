import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

describe('<App>', () => {
  test('renders properly', () => {
    const { queryByRole } = render(<App />);
    expect(queryByRole('app')).toBeTruthy();
  });
});
