// Input validation function
function isValidInput(input: string): boolean {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(input);
}

// Main processing loop
function processInput(input: string): void {
    if (!isValidInput(input)) {
        console.error('Invalid input. Only alphanumeric characters are allowed.');
        return;
    }
    // Process the valid input
    console.log(`Processing input: ${input}`);
}

// Sample main function to demonstrate usage
function main() {
    const inputs = ['validInput123', 'invalid input!', 'anotherValid123'];
    inputs.forEach(input => {
        processInput(input);
    });
}

main();