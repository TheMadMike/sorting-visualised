import shuffle from './shuffle';

describe('shuffle()', () => {
   test('randomly shuffles an array of ordered numbers', () => {
    let data = [1, 2, 3, 4, 5, 6];
    shuffle(data, 50);
    expect(data).not.toBe([1, 2, 3, 4, 5, 6]);
   });
});