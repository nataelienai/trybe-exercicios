const fs = require('fs').promises;
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('Which file do you want to print? ', async (answer) => {
  try {
    const fileContent = await fs.readFile(answer, 'utf-8');
    console.log(fileContent);
  } catch {
    console.error(`File does not exist.`);
  }
  rl.close();
});
