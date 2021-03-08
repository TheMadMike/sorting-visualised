import SortingAlgorithm from './Algorithms/SortingAlgorithm';
import BubbleSort from './Algorithms/BubbleSort';

const algorithms = new Map<string, SortingAlgorithm>();
algorithms.set('BubbleSort', new BubbleSort());

export default algorithms;