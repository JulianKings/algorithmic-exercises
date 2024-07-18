function titleCase(str) {
    let finalString = '';
    let space = true;
    for(let i = 0; i < str.length; i++)
    {
      if(space)
      {
        finalString += str[i].toUpperCase();
      } else {
        finalString += str[i].toLowerCase();
      }
  
      if(str[i] === ' ')
      {
        space = true;
      } else {
        space = false;
      }
    }
    return finalString;
  }
  
  titleCase("I'm a little tea pot");