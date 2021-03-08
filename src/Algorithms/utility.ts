export const sleep = async (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const swap = (array: any[], aIndex: number, bIndex: number) : void => {
    let buffer = array[aIndex];
    array[aIndex] = array[bIndex];
    array[bIndex] = buffer;
};