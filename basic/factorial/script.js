function factorialize(num) {
    let fact = 1;
    for(let i = 0; i < num; i++)
    {
      fact = fact*(i+1);
    }
    return fact;
  }
  
  factorialize(5);