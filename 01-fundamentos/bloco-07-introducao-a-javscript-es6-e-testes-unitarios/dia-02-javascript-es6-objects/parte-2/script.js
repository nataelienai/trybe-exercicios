const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addProperty(target, key, value) {
  target[key] = value;
}

addProperty(lesson2, 'turno', 'noite');

function listKeys(object) {
  return Object.keys(object);
}

function getLength(object) {
  return Object.keys(object).length;
}

function listValues(object) {
  return Object.values(object);
}
