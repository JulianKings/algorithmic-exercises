function findLongestWordLength(str) {
    const splitWord = str.split(' ');
    let word = '';
    for(const w of splitWord)
    {
      if(w.length > word.length)
      {
        word = w;
      }
    }
    return word.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");