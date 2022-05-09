import readline from 'readline-sync';

const scriptsPath = {
  'Length Conversion': './exercise5.js',
  'Mass Conversion': './exercise6.js',
  'Capacity Conversion': './exercise7.js',
  'Area Conversion': './exercise8.js',
  'Volume Conversion': './exercise9.js'
};

type ScriptName = keyof typeof scriptsPath;

function exec() {
  const scriptsName = Object.keys(scriptsPath);
  const chosenScriptKey = readline.keyInSelect(scriptsName);

  if (chosenScriptKey === -1) {
    return;
  }

  const chosenScript = scriptsName[chosenScriptKey];
  require(scriptsPath[chosenScript as ScriptName]);
}

exec();
