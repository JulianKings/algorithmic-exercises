function whatIsInAName(collection, source) {
    const resultArray = [];
    for(const element of collection)
    {
      const elementKeys = Object.keys(element);
      const sourceKeys = Object.keys(source);
  
      let valid = true;
  
      for(const key of sourceKeys)
      {
        const keyPos = elementKeys.findIndex((elKey) => key === elKey)
        if(keyPos >= 0)
        {
          if(element[elementKeys[keyPos]] !== source[key])
          {
            valid = false;
          }
        } else {
          valid = false;
        }
      }  
  
      if(valid)
      {
        resultArray.push(element);
      } 
    }
  
    return resultArray;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });