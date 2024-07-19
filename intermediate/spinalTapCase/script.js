function spinalCase(str) {
    let result = '';
    for(let i = 0; i < str.length; i++)
    {
      const character = str[i];
      if(character === ' ' || character === '_' || character === '-')
      {
        result += '-';
      } else if(i > 0 && !isLowerCase(character))
      {
        if(str[i-1] !== ' ' && str[i-1] !== '_' && str[i-1] !== '-')
        {
          result += '-' + character.toLowerCase();
        } else {
          result += character.toLowerCase();
        }
      } else {
        result += character.toLowerCase();
      }
    }
    return result;
  }
  
  function isLowerCase(str) {
      return str === str.toLowerCase() &&
             str !== str.toUpperCase();
  }
  
  spinalCase('This Is Spinal Tap');