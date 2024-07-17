function mutation(arr) {
    const firstElement = arr[0].toLowerCase();
    const secondElement = arr[1].toLowerCase();
  
    let letterAmount = 0;
    for(let i = 0; i < secondElement.length; i++)
    {
      let letterTest = false;
      for(let u = 0; u < firstElement.length; u++)
      {      
  
        if(secondElement[i] === firstElement[u])
        {
          letterTest = true;
        }     
        
      }
      
      if(letterTest)
      {
        letterAmount++;
      }
    }
  
    return (letterAmount === secondElement.length);
  }
  
  mutation(["hello", "hey"]);