export const sleep = async (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const swap = (array: any[], aIndex: number, bIndex: number) : void => {
    let buffer = array[aIndex];
    array[aIndex] = array[bIndex];
    array[bIndex] = buffer;
};

export const generateDataSet = (numberOfElements: number): number[] => {
    let dataSet: number[] = [];
    for(let i = 0; i < numberOfElements; ++i) {
      dataSet.push(i+1);
    }
    return dataSet;
};