function parseJson(jsonString: string): any {
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.error('Invalid JSON string:', error);
        return null;
    }
}

function divideNumbers(numerator: number, denominator: number): number | string {
    if (denominator === 0) {
        return 'Cannot divide by zero';
    }
    return numerator / denominator;
}

function safelyGetProperty<T, K extends keyof T>(obj: T, key: K): T[K] | string {
    if (obj === null || obj === undefined) {
        return 'Object is null or undefined';
    }
    return key in obj ? obj[key] : 'Property does not exist';
}

export { parseJson, divideNumbers, safelyGetProperty };