function repeatStringNumTimes(str, num) {
    if(num > 0)
    {
      let result = '';
      for(let i = 0; i < num; i++)
      {
        result += str;
      }
      return result;
    } else {
      return '';
    }
  }
  
  repeatStringNumTimes("abc", 3);