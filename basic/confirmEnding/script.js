function confirmEnding(str, target) {
    for(let i = 0; i < target.length; i++)
    {
      const position = str.length - 1 - i;
      const secondaryPosition = target.length - 1 - i;
      if(str[position] !== target[secondaryPosition])
      {
        return false;
      }
    }
    return true;
  }
  
  confirmEnding("Bastian", "n");