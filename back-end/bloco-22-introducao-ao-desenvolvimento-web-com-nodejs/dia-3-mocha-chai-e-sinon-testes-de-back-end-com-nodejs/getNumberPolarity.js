function getNumberPolarity(number) {
  if (typeof number !== 'number') throw new Error();
  if (number > 0) return 'positive';
  if (number < 0) return 'negative';
  return 'neutral';
}

module.exports = getNumberPolarity;
