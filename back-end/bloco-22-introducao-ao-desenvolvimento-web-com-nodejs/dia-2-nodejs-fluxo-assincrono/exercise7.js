const fs = require('fs').promises;
const util = require('util');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });
const question = util.promisify(rl.question).bind(rl);

async function main() {
  try {
    const filePath = await question('Which file do you want to use? ');
    const fileContent = await fs.readFile(filePath, 'utf-8');

    const wordToReplace = await question('Word to replace: ');
    const replaceWord = await question('Replace word: ');

    const newFileContent = await fileContent.replace(
      new RegExp(wordToReplace, 'g'),
      replaceWord
    );
    console.log(newFileContent);

    const newFilePath = await question('Which file do you want to write? ');
    await fs.writeFile(newFilePath, newFileContent);
  } catch (error) {
    console.error(error.message);
  } finally {
    rl.close();
  }
}

main();
