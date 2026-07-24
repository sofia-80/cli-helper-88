type PerformanceMetrics = {
    executionTime: number;
    memoryUsage: number;
};

export function measurePerformance(fn: Function, ...args: any[]): PerformanceMetrics {
    const startMemory = process.memoryUsage().heapUsed;
    const startTime = process.hrtime();
    
    const result = fn(...args);
    
    const endTime = process.hrtime(startTime);
    const endMemory = process.memoryUsage().heapUsed;
    
    return {
        executionTime: endTime[0] * 1e3 + endTime[1] / 1e6,
        memoryUsage: endMemory - startMemory,
    }; 
}

export function optimizeArray<T>(array: T[], callback: (item: T) => boolean): T[] {
    const uniqueItems = new Set<T>();
    for (const item of array) {
        if (callback(item)) {
            uniqueItems.add(item);
        }
    }
    return Array.from(uniqueItems);
}