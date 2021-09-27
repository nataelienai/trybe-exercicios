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

const allLessons = Object.assign({},
  {lesson1: lesson1},
  {lesson2: lesson2},
  {lesson3: lesson3}
);

function getNumberOfStudents() {
  let numberOfStudents = 0;
  for (let index in allLessons) {
    numberOfStudents += allLessons[index].numeroEstudantes;
  }
  return numberOfStudents;
}
