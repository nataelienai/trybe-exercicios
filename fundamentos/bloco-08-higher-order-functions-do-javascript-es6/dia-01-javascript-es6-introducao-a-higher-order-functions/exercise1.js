const createEmployee = (name) => {
  const email = `${name.replace(' ', '_').toLowerCase()}@trybe.com`;
  return {name, email};
}

const newEmployees = (createEmployeeFn) => {
  const employees = {
    id1: createEmployeeFn('Pedro Guerra'),
    id2: createEmployeeFn('Luiza Drumond'),
    id3: createEmployeeFn('Carla Paiva'),
  }
  return employees;
};

console.log(newEmployees(createEmployee));
