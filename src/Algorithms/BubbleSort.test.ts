import BubbleSort from './BubbleSort';
import { sortsProperly } from './tests';

describe('BubbleSort', () => {
    test('sort() properly sorts data', async () => {
        const algorithm = new BubbleSort();
        expect(await sortsProperly(algorithm)).toBe(true);
    });
})