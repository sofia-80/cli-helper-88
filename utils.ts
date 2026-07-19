function mergeDeep(target: any, source: any): any {
    if (typeof target !== 'object' || target === null || typeof source !== 'object' || source === null) {
        return source;
    }
    for (const key of Object.keys(source)) {
        if (Array.isArray(source[key])) {
            target[key] = Array.isArray(target[key]) ? target[key].concat(source[key]) : source[key].slice();
        } else if (typeof source[key] === 'object') {
            target[key] = mergeDeep(target[key] || {}, source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

function uniqueArray<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
}

function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

export { mergeDeep, uniqueArray, deepClone };