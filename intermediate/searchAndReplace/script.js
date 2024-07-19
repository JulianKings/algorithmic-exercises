function myReplace(str, before, after) {
    const words = str.split(' ');
    let position = 0;
    let result = '';
  
    for(const element of words)
    {
      if(element === before)
      {
        if(!isLowerCase(element[0]))
        {
          result += capitalize(after);
        } else {
          result += after.toLowerCase();
        }
      } else {
        result += element;
      }
  
      if(position !== (words.length - 1))
      {
        result += ' ';
      }
      position++;
    }
    
    return result;
  }
  
  function capitalize(word)
  {
    let result = '';
    for(let i = 0; i < word.length; i++)
    {
      if(i === 0)
      {
        result += word[i].toUpperCase();
      } else {
        result += word[i];
      }
    }
  
    return result;
  }
  
  
  function isLowerCase(str) {
      return str === str.toLowerCase() &&
             str !== str.toUpperCase();
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");