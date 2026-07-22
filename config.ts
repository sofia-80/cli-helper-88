import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const isValidInput = (input: string): boolean => {
  const trimmed = input.trim();
  return trimmed.length > 0 && /^[a-zA-Z0-9 ]+$/.test(trimmed);
};

const mainProcessingLoop = async () => {
  let userInput = '';
  while (true) {
    userInput = await new Promise<string>((resolve) => {
      rl.question('Enter your input (type "exit" to quit): ', (answer) => {
        resolve(answer);
      });
    });

    if (userInput.toLowerCase() === 'exit') {
      console.log('Exiting...');
      break;
    }

    if (!isValidInput(userInput)) {
      console.log('Invalid input. Please enter alphanumeric characters only.');
      continue;
    }

    console.log(`You entered: ${userInput}`);
  }
  rl.close();
};

mainProcessingLoop();
