const caesarCipher = (string, sVal) => {
  if (sVal === 0 || !sVal) {
    return string;
  }

  let alphabet = {
    65: 'A',
    66: 'B',
    67: 'C',
    68: 'D',
    69: 'E',
    70: 'F',
    71: 'G',
    72: 'H',
    73: 'I',
    74: 'J',
    75: 'K',
    76: 'L',
    77: 'M',
    78: 'N',
    79: 'O',
    80: 'P',
    81: 'Q',
    82: 'R',
    83: 'S',
    84: 'T',
    85: 'U',
    86: 'V',
    87: 'W',
    88: 'X',
    89: 'Y',
    90: 'Z',
    97: 'a',
    98: 'b',
    99: 'c',
    100: 'd',
    101: 'e',
    102: 'f',
    103: 'g',
    104: 'h',
    105: 'i',
    106: 'j',
    107: 'k',
    108: 'l',
    109: 'm',
    110: 'n',
    111: 'o',
    112: 'p',
    113: 'q',
    114: 'r',
    115: 's',
    116: 't',
    117: 'u',
    118: 'v',
    119: 'w',
    120: 'x',
    121: 'y',
    122: 'z',
  };

  let newString = '';

  for (let i = 0; i < string.length; i += 1) {
    let charAt = string.charCodeAt(i);

    let newChar = '';

    if (charAt >= 65 && charAt <= 90) {
      newChar = shiftChar(charAt, sVal, 90, 65);
      console.log('newup', newChar);
    } else if (charAt >= 97 && charAt <= 122) {
      newChar = shiftChar(charAt, sVal, 122, 97);
      console.log('newlo', newChar);
    } else {
      newChar = charAt;
    }

    newString += String.fromCharCode(newChar);
  }

  console.log('kk', newString);
};

const shiftChar = (char, shiftVal, max, min) => {
  let newChar = char + shiftVal;

  if (newChar < min) {
    newChar = max - shiftVal;
  }
  if (newChar > max) {
    newChar = min + shiftVal;
  }
  return newChar;
};

export { caesarCipher, shiftChar };
