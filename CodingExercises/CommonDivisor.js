function greatestCommonDivisor(a, b){
    var divisor = 2, 
        greatestDivisor = 1;
  
    //if u pass a -ve number this will not work. fix it dude!!
    if (a < 2 || b < 2)
       return 1;
    
    while(a >= divisor && b >= divisor){
     if(a %divisor == 0 && b% divisor ==0){
        greatestDivisor = divisor;      
      }
     divisor++;
    }
    return greatestDivisor;
  }
  
  // function greatestCommonDivisor(a, b){
  //    if(b == 0)
  //      return a;
  //    else 
  //      return greatestCommonDivisor(b, a%b);
  // }
  
  
  
  console.log("greatestCommonDivisor(14, 21)", greatestCommonDivisor(14, 21))
  console.log("greatestCommonDivisor(14, 21)", greatestCommonDivisor(69, 169))
  console.log("greatestCommonDivisor(0, 0)", greatestCommonDivisor(0, 0))
  console.log("greatestCommonDivisor(1, 0)", greatestCommonDivisor(0, 1))