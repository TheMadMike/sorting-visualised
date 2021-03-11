import { render, cleanup, queryByTestId } from '@testing-library/react';
import DataChart from './DataChart';

afterEach(cleanup);

describe('<DataChart>', () => {
    test('renders properly with <canvas> element', () => {
        const { queryByTestId } = render(<DataChart dataSet={[]}/>);
        expect(queryByTestId('canvas')).toBeTruthy();
    });
});

export default DataChart;