const generateRandomInteger = (min: number, max: number): number => {
    return Math.round(Math.random()*(max-min)) - min;
};

const shuffle = (array: any[], times: number = array.length): any[] => {
    for(let i = 0; i < times; ++i) {
        //generate random array indexes to swap
        let a = generateRandomInteger(0, array.length-1);
        let b = generateRandomInteger(0, array.length-1);
        //swap array's elements
        let buffer = array[a];
        array[a] = array[b];
        array[b] = buffer;
    }

    return array;
};

export default shuffle;