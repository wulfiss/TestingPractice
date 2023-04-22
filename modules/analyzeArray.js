const analyzeArray = (arr) => {
  const averageCal = () => {
    let sum = arr.reduce((accumulator, current) => accumulator + current, 0);
    return sum / arr.length;
  };

  const minCal = () => Math.min(...arr);
  const maxCal = () => Math.max(...arr);
  const length = arr.length;
  return {
    average: averageCal(),
    min: minCal(),
    max: maxCal(),
    length: length,
  };
};

export { analyzeArray };
