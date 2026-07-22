import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isValidInput(input: string): boolean {
  const regex = /^[a-zA-Z0-9 ]+$/;
  return regex.test(input);
}

function processInput(input: string): void {
  console.log(`Processing: ${input}`);
}

function main(): void {
  rl.question('Enter input: ', (input) => {
    if (isValidInput(input)) {
      processInput(input);
    } else {
      console.error('Invalid input. Please use alphanumeric characters only.');
    }
    rl.close();
  });
}

main();