const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkScore = (rightAnswers, answers, checker) => {
  return checker(rightAnswers, answers);
}

const score = checkScore(RIGHT_ANSWERS, STUDENT_ANSWERS, (rightAnswers, answers) => {
  let score = 0;

  for (index = 0; index < answers.length; index += 1) {
    if (answers[index] !== 'N.A') {
      if (answers[index] === rightAnswers[index]) {
        score += 1;
      } else {
        score -= 0.5;
      }
    }
  }
  return score;
});

console.log(score);
