export function memoize<T extends (...args: any[]) => any>(fn: T): T {
    const cache: Map<string, ReturnType<T>> = new Map();

    return function (...args: Parameters<T>): ReturnType<T> {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key) as ReturnType<T>;
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    } as T;
}

export function throttle<T extends (...args: any[]) => void>(fn: T, wait: number): T {
    let lastCall = 0;
    let timeout: NodeJS.Timeout | null = null;

    return function (...args: any[]) {
        const now = Date.now();
        if (lastCall && now < lastCall + wait) {
            clearTimeout(timeout!);
            timeout = setTimeout(() => {
                lastCall = now;
                fn(...args);
            }, wait - (now - lastCall));
        } else {
            lastCall = now;
            fn(...args);
        }
    } as T;
}

export function debounce<T extends (...args: any[]) => void>(fn: T, wait: number): T {
    let timeout: NodeJS.Timeout | null = null;

    return function (...args: any[]) {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            fn(...args);
        }, wait);
    } as T;
}
