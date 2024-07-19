function destroyer(arr, ...args) {
    const arrResult = [];
    for(const element of arr)
    {
      if(args.findIndex((el) => el === element) === -1)
      {
        arrResult.push(element);
      }
    }
    return arrResult;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);