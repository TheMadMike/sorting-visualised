import SortingAlgorithm from './SortingAlgorithm';

export const sortsProperly = async (algorithm: SortingAlgorithm): Promise<boolean> => {
    let data = [];
    for(let i = 50; i >= 0; --i) {
        data.push(i);
    }
    const setData = (x: number[]) => {
        data = [...x];
    };

    algorithm.stepTimeMs = 0;
    await algorithm.sort([...data], setData);

    for(let i = 0; i < (data.length-1); ++i) {
        if(data[i] > data[i+1]) {
            return false;
        }
    }

    return true;
};
