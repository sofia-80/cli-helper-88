/**
 * Flattens an array of arrays into a single array.
 *
 * @param {Array<Array<T>>} arrays - An array of arrays to flatten.
 * @returns {Array<T>} - A new array containing all elements from the input arrays.
 * @template T
 */
function flatten<T>(arrays: Array<Array<T>>): Array<T> {
    return arrays.reduce((acc: Array<T>, val: Array<T>) => acc.concat(val), []);
}

/**
 * Debounces a function, ensuring it is not called again until a specified delay has passed.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The delay in milliseconds to wait before calling the function.
 * @returns {Function} - A new debounced function.
 */
function debounce(func: Function, delay: number): Function {
    let timeoutId: NodeJS.Timeout;
    return function(...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

/**
 * Throttles a function, limiting its execution to once per specified time interval.
 *
 * @param {Function} func - The function to throttle.
 * @param {number} limit - The time interval in milliseconds to throttle the function.
 * @returns {Function} - A new throttled function.
 */
function throttle(func: Function, limit: number): Function {
    let lastFunc: NodeJS.Timeout;
    let lastRan: number;
    return function(this: any, ...args: any[]) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        }
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
            if ((Date.now() - lastRan) >= limit) {
                func.apply(this, args);
                lastRan = Date.now();
            }
        }, limit - (Date.now() - lastRan));
    };
}