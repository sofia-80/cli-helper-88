export function chunkArray<T>(arr: T[], size: number): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

export function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
    let timeoutId: NodeJS.Timeout | null = null;
    return function (this: any, ...args: any[]) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    } as T;
}

export function deepMerge<T>(target: T, source: Partial<T>): T {
    for (const key in source) {
        if (source[key] instanceof Object && key in target) {
            target[key] = deepMerge(target[key], source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

export function generateRandomId(length: number = 8): string {
    return Math.random().toString(36).substr(2, length);
}

export function throttle<T extends (...args: any[]) => void>(func: T, limit: number): T {
    let lastFunc: NodeJS.Timeout | null;
    let lastRan: number;
    return function (this: any, ...args: any[]) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            if (lastFunc) clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if (Date.now() - lastRan >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    } as T;
}
