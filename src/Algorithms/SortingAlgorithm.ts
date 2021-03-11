abstract class SortingAlgorithm {
    
    public abstract sort(dataSet: number[], setDataSet: Function): Promise<any>;

    public stepTimeMs: number;

    protected shouldBeRunning: boolean = false;

    constructor(stepTimeMs: number = 500) {
        this.stepTimeMs = stepTimeMs;
    }

    protected async init() {
        this.shouldBeRunning = true;
    }

    public async stop() {
        this.shouldBeRunning = false;
    }
}

export default SortingAlgorithm;