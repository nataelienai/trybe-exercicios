const fs = require('fs').promises;

async function writeFile(fileName, content) {
  if (!fileName || !content) throw new Error();
  await fs.writeFile(fileName, content);
  return 'ok';
}

module.exports = writeFile;
