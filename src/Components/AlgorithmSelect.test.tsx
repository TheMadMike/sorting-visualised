import { render, cleanup, fireEvent } from '@testing-library/react';
import AlgorithmSelect from './AlgorithmSelect';

afterEach(cleanup);

describe('<AlgorithmSelect>', () => {
    test('renders properly', () => {
        const { queryByTestId } = render(<AlgorithmSelect onChange={() => {}}/>);
        expect(queryByTestId('select')).toBeTruthy();
    });
});