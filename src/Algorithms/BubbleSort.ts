import SortingAlgorithm from './SortingAlgorithm';

import { sleep, swap } from './utility';

class BubbleSort extends SortingAlgorithm {

    async sort(dataSet: number[], setDataSet: Function) {
        await this.init();
        let dataCopy = [...dataSet];
        
        let sorted = true;
        do {
            sorted = true;
            for(let i = 0; i < (dataCopy.length-1); ++i) {
                if(dataCopy[i] > dataCopy[i+1]) {
                    swap(dataCopy, i, i+1);
                    sorted = false;
                }
                await sleep(this.stepTimeMs);
                setDataSet(dataCopy);

                if(this.shouldBeRunning === false)
                    return;
            }
        } while(!sorted);
    }
};

export default BubbleSort;