function encodeChar(char) {
  let encoding = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  if (encoding[char] !== undefined) {
    return encoding[char];
  }
  return char;
}

function decodeChar(char) {
  let encoding = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  if (encoding[char] !== undefined) {
    return encoding[char];
  }
  return char;
}

function encode(string) {
  let encodedString = '';
  for (let char of string) {
    encodedString += encodeChar(char);
  }
  return encodedString;
}
function decode(string) {
  let decodedString = '';
  for (let char of string) {
    decodedString += decodeChar(char);
  }
  return decodedString;
}
