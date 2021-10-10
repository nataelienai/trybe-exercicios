const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const expectedResult = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

function studentAverage() {
  return students.map((student, index) => {
    const gradeSum = grades[index].reduce((acc, number) => acc + number);
    return {
      name: student,
      average: gradeSum / grades[index].length
    };
  });
}

assert.deepStrictEqual(studentAverage(), expectedResult);
