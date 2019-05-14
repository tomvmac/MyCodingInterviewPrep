function exponent(num, power){
    if (power < 2){
      return num;
    }
    return num * exponent(num, power -1); 
  }
  
  
  // function exponent(num, power){
  //   let answer = num;
  //   for (let i=0; i<power-1; i++){
  //     answer = answer * num;
  //   }
  //   return answer;
  // }
  
  
  
  // function exponent(num, power){
  //   // base condition
  //   if (power == 0){
  //     return 1;
  //   }
  //   // recurse
  //   return num * exponent(num, power-1);
  
  
  // }
  
  console.log(exponent(2,3));