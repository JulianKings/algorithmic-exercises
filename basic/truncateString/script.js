function truncateString(str, num) {
    let finalString = '';
    const length = (str.length < num) ? str.length : num;
    for(let i = 0; i < length; i++)
    {
      finalString += str[i];
    }
    finalString += (str.length <= num) ? '' : '...';
    return finalString;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);