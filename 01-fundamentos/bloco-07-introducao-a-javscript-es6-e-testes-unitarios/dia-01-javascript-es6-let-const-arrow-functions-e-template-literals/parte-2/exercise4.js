function replaceX(string, replaceValue) {
  return string.replace('x', replaceValue);
}

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Bootstrap',
  'Bash',
];

function concatenate(string) {
  skills.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
  return `${string} Minhas cinco principais habilidades são: ${skills}`;
}

console.log(concatenate(replaceX('Olá, x aqui!', 'Natã')));
