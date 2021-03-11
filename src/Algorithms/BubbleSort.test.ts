import BubbleSort from './BubbleSort';

describe('BubbleSort', () => {
    test('sort() properly sorts data', async () => {
        let data = [3, 2, 1];
        const setData = (x: number[]) => {
            data = [...x];
        };

        const algorithm = new BubbleSort();
        algorithm.stepTimeMs = 0;
        await algorithm.sort([...data], setData);

        for(let i = 0; i < (data.length-1); ++i) {
            expect(data[i] < data[i+1]).toBe(true);
        }
    });
})