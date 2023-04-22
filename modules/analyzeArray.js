const analyzeArray = (arr) => {
  const averageCal = () => {
    let sum = arr.reduce((accumulator, current) => accumulator + current, 0);
    return sum / arr.length;
  };

  const minCal = () => Math.min(...arr);

  return {
    average: averageCal(),
    min: minCal(),
  };
};

export { analyzeArray };
