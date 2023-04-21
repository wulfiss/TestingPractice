const capitalize = (string) => {
  let str = string.split(' ');
  let result = [];
  for (let i = 0; i < str.length; i += 1) {
    let arrStr = str[i].split('');
    arrStr[0] = arrStr[0].toUpperCase();
    result.push(arrStr.join(''));
  }
  return result.join(' ');
};

export default capitalize;
