function reverseString(str) {
    let reverse = '';
    for(let i = 0; i < str.length; i++)
    {
      let c = str[(str.length-1)-i];
      reverse += c;
    }
    return reverse;
  }
  
  reverseString("hello");