const fs = require('fs').promises;

async function readAndWriteMultipleFiles() {
  const stringsToWrite = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const filesToWrite = stringsToWrite.map((string, index) => (
    fs.writeFile(`file${index + 1}.txt`, string)
  ));
  await Promise.all(filesToWrite);
  
  let filesToRead = [];
  for (let i = 1; i <= 5; i += 1) {
    filesToRead.push(fs.readFile(`file${i}.txt`, { encoding: 'utf-8' }));
  }
  const writtenStrings = await Promise.all(filesToRead);
  fs.writeFile(`fileAll.txt`, writtenStrings.join(' '));
}

readAndWriteMultipleFiles();
