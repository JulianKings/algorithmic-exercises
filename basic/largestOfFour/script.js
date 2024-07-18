// OPTION A
function largestOfFour(arr) {
    const finalArray = [];
    for(const smallArray of arr)
    {
      let biggestNum = Number.NEGATIVE_INFINITY;
      for(const number of smallArray)
      {
        if(number > biggestNum)
        {
          biggestNum = number;
        }
      }
  
      finalArray.push(biggestNum);
    }
    return finalArray;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

  // OPTION B
  function largestOfFour(arr) {
    const finalArray = [];
    for(const smallArray of arr)
    {
      const sortedArray = smallArray.sort((a, b) => b - a);
      finalArray.push(sortedArray[0]);
    }
    return finalArray;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);