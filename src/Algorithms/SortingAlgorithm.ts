interface SortingAlgorithm {
    stepTimeMs: number;
    sort(dataSet: number[], setDataSet: Function): Promise<any>;
    stop(): Promise<any>;
};

export default SortingAlgorithm;