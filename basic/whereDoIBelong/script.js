function getIndexToIns(arr, num) {
    const sortedArray = [];
    
    for(const element of arr)
    {
      if(sortedArray.length == 0)
      {
        sortedArray.push(element)
      } else {
        let currentPosition = 0;
        for(const ordElement of sortedArray)
        {
          if(ordElement > element)
          {
            sortedArray.splice(currentPosition, 0, element)
            break;
          }
          currentPosition++;
        }
  
        if((currentPosition) === sortedArray.length)
        {
          sortedArray.splice(currentPosition, 0, element);
        }
      }
    }

    let currentIndex = 0;
    for(const element of sortedArray)
    {
      if(element >= num)
      {
        return currentIndex;
      }
      currentIndex++;
    }
    return currentIndex;
  }
  
  getIndexToIns([40, 60], 50);