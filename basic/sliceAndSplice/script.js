// with splice
function frankenSplice(arr1, arr2, n) {
    let currentPos = n;
    const resultArray = [...arr2];
    for(const element of arr1)
    {
      resultArray.splice(currentPos, 0, element);
      currentPos++;
    }
    return resultArray;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

// without splice
function frankenSplice(arr1, arr2, n) {
    const resultArray = [];
    for(let i = 0; i < n; i++)
    {
      resultArray.push(arr2[i]);
    }
    for(const element of arr1)
    {
      resultArray.push(element);
    }
    for(let i = n; i < arr2.length; i++)
    {
      resultArray.push(arr2[i]);
    }
    return resultArray;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);