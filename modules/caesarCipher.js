const caesarCipher = (string, sVal) => {
  if (sVal === 0 || !sVal) {
    return string;
  }

  let newString = '';

  for (let i = 0; i < string.length; i += 1) {
    let charAt = string.charCodeAt(i); //convert every letter into ASCII code;

    let newChar = '';

    /* the values [65-90] correspond to [A-Z] in ASCII in english alphabet*/
    /* the values [97-122] correspond to [a-z] in ASCII in english alphabet*/

    if (charAt >= 65 && charAt <= 90) {
      newChar = shiftChar(charAt, sVal, 90, 65);
    } else if (charAt >= 97 && charAt <= 122) {
      newChar = shiftChar(charAt, sVal, 122, 97);
    } else {
      newChar = charAt;
    }

    newString += String.fromCharCode(newChar); //convert ascii code into letter;
  }

  return newString;
};

const shiftChar = (char, shiftVal, max, min) => {
  let newChar = char + shiftVal;

  if (newChar < min) {
    let rest = min - newChar;
    newChar = max - rest;
  }
  if (newChar > max) {
    let rest = newChar - max;
    newChar = min + rest;
  }
  return newChar;
};

export { caesarCipher, shiftChar };
