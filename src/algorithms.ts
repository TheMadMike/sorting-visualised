import SortingAlgorithm from './Algorithms/SortingAlgorithm';
import BubbleSort from './Algorithms/BubbleSort';
import QuickSort from './Algorithms/QuickSort';

const algorithms = new Map<string, SortingAlgorithm>();
algorithms.set('BubbleSort', new BubbleSort());
algorithms.set('QuickSort', new QuickSort());

export default algorithms;