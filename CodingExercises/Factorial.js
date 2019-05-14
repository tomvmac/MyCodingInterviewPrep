function factorial(num){

    if (num <= 1){
      return num;
    }
  
    return num * factorial(num -1);
  
  
  }
  
  
  // function factorial(num){
  //   if (num === 0 || num === 1) {
  //       // base condition
  //       return 1
  //   } else {
  //       // recursive case
  //       return num * factorial(num - 1)
  //   }
  
  // }
  
  // function factorialIterative(num){
  //   let factorial = 1;
  //   for (let i=1; i<=num; i++){
  //     factorial = factorial * i;
  //   }
  //   return factorial;
  // }
  
  
  console.log(factorial(4));
  