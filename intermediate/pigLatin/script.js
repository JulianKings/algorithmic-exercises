function translatePigLatin(str) {
    let result = '';
    let consonant = true;
    let consonantItem = '';
    let appendConsonant = false;
    for(let i = 0; i < str.length; i++)
    {
      const character = str[i].toLowerCase();
      if(i === 0)
      {
        if(isVowel(character))
          {
            result += character;
            consonant = false;
          } else {
            consonantItem = character;
            appendConsonant = true;
          }
      } else {
        if(appendConsonant)
        {
          if(isVowel(character))
          {
            appendConsonant = false;
            result += character;
          } else {
            consonantItem += character;
          }
        } else {        
          result += character;
        }
      }
  
    }
  
    function isVowel(character)
    {
      return (character === 'a' || character === 'e' || character === 'i' ||
          character == 'o' || character === 'u');
    }
  
    if(consonant)
    {
      result += consonantItem + 'ay';
    } else {
      result += 'way';
    }
    return result;
  }
  
  translatePigLatin("consonant");