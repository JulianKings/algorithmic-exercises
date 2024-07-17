function bouncer(arr) {
    const resultArray = [];
    for(const element of arr)
    {
      if(element)
      {
        resultArray.push(element);
      }
    }
    return resultArray;
  }
  
  bouncer([7, "ate", "", false, 9]);