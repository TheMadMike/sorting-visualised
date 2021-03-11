import SortingAlgorithm from './SortingAlgorithm';
import { swap, sleep } from './utility';

class QuickSort extends SortingAlgorithm {

    async sort(dataSet: number[], setDataSet: Function) {
        await this.init();
        
        let dataCopy: number[] = [...dataSet];
        let stack: number[] = [];
        
        stack.push(0);
        stack.push(dataCopy.length - 1);

        while(stack.length >= 2) {
            let end = stack.pop() as number;
            let start = stack.pop() as number;

            let pivotIndex = await this.partition(dataCopy, start, end, setDataSet);

            if(pivotIndex - 1 > start) {
                stack.push(start);
                stack.push(pivotIndex - 1);
            }
            if(pivotIndex + 1 < end) {
                stack.push(pivotIndex + 1);
                stack.push(end);
            }

            if(!this.shouldBeRunning) return;
        }

        setDataSet(dataCopy);
    }

    private async partition(array: number[], start: number, end: number, setDataSet: Function) {
        let pivot = { value: array[end], index: start };

        for(let i = start; i < end; ++i) {
            if(array[i] < pivot.value) {
                swap(array, i, pivot.index);
                pivot.index += 1;
                setDataSet(array);
            }

            await sleep(this.stepTimeMs);
        }

        //put the pivot.value in the "middle"
        swap(array, pivot.index, end);

        return pivot.index;
    }
};

export default QuickSort;