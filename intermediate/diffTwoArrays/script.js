function diffArray(arr1, arr2) {
    const symDiff = [];
  
    for(const element of arr1)
    {
      if(arr2.findIndex((el) => element === el) === -1 && symDiff.findIndex((el) => element === el) === -1)
      {
        symDiff.push(element);
      }
    }
  
    for(const element of arr2)
    {
      if(arr1.findIndex((el) => element === el) === -1 && symDiff.findIndex((el) => element === el) === -1)
      {
        symDiff.push(element);
      }
    }
  
    return symDiff;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);