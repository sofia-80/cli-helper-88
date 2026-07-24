export function validateInput(input: string): boolean {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(input);
}

export function processInput(input: string): string {
    if (!validateInput(input)) {
        throw new Error('Invalid input. Only alphanumeric characters are allowed.');
    }  
    // Proceed with processing the valid input.
    return `Processed: ${input}`;
}

export function mainLoop(inputs: string[]): void {
    for (const input of inputs) {
        try {
            const result = processInput(input);
            console.log(result);
        } catch (error) {
            console.error(`Error: ${error.message}`);
        }
    }
}

// Example usage
const inputsToProcess = ['validInput123', 'invalidInput@!', 'anotherValidInput456'];
mainLoop(inputsToProcess);