import QuickSort from './QuickSort';
import { sortsProperly } from './tests';

describe('QuickSort', () => {
    test('properly sorts data', async () => {
        const algorithm = new QuickSort();
        expect(await sortsProperly(algorithm)).toBe(true);
    }); 
});