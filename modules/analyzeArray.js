const analyzeArray = (arr) => {
  const averageCal = () => {
    let sum = arr.reduce((accumulator, current) => accumulator + current, 0);
    return sum / arr.length;
  };

  return {
    average: averageCal(),
  };
};

export { analyzeArray };
