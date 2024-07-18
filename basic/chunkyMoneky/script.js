function chunkArrayInGroups(arr, size) {
    const finalArray = [];
    let currentArray = [];
    let current = 0;
    for(const element of arr)
    {
      if(current >= size)
      {
        finalArray.push(currentArray);
        current = 0;
        currentArray = [];
      }
      currentArray.push(element);
      current++;
    }
  
    if(currentArray.length > 0)
    {
      finalArray.push(currentArray);
    }
    return finalArray;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);