function isPrime(num){
    //A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
    
    return num%2==0 ? false:true;
    
    }
    
    function findAllPrimes(nums){
      let primes = [];
      for (i=1; i<=nums.length; i++){
        if (nums[i]%2!=0){
          if (nums[i]){
            primes.push(nums[i]);
          }
          
        }
      }
      return primes;
    
    }
    
    
    
    
    console.log("isPrime(4)", isPrime(4));
    console.log("isPrime(5)", isPrime(5));
    
    
    
    console.log("primes", findAllPrimes([1,3,4,8,10]))