function sumAll(arr) {
    const smaller = (arr[0] < arr[1]) ? arr[0] : arr[1];
    const bigger = (arr[0] > arr[1]) ? arr[0] : arr[1];
    let result = 0;
    for(let i = smaller; i <= bigger; i++)
    {
      result += i;
    }
    return result;
  }
  
  sumAll([1, 4]);