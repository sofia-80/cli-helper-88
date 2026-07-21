type InputValidator = (input: string) => boolean;

type ValidationResult = {
    isValid: boolean;
    message: string;
};

const validateInput: InputValidator = (input) => {
    const regex = /^[a-zA-Z0-9_]+$/;  // Allow only alphanumeric and underscores
    return regex.test(input);
};

const getValidationResult = (input: string): ValidationResult => {
    if (validateInput(input)) {
        return { isValid: true, message: 'Input is valid' };
    }
    return { isValid: false, message: 'Input contains invalid characters' };
};

const mainProcessingLoop = () => {
    const inputs = ['validInput123', 'invalid/input!', 'another$Invalid'];

    inputs.forEach((input) => {
        const result = getValidationResult(input);
        console.log(`Input: ${input}, Validation: ${result.message}`);
    });
};

mainProcessingLoop();