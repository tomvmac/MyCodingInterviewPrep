function fibonacci(num){

    if (num <2){
      return num;
    }
  
    return fibonacci(num-2) + fibonacci(num-1);
  
  }
                         
  
  // function fibonacci(num){
  //   // Given a number, calculate the fibonacci sequence where the next number is the sum
  //   // of previous two numbers
  //   if (num < 2){
  //     return num;
  //   }
  
  //   return fibonacci(num -1) + fibonacci(num -2);
  
  
  // }
  
  
  // function fibonacci(num){
  //   let arr = [0,1];
  
  //   for (let i=2; i <= num; i++){
  //     arr.push(arr[i-2] + arr[i-1]);
  //   }
  
  //   return arr[num];
  // }
  
  
  console.log(fibonacci(5));
  
  
  