// Write a function to check if a given string is a palidrome
// Ex) radar, pop are a palidromes

/* Strategy:

1. Convert string to array
2. call array.reverse
3. compare

*/

function isPalidrome(str){
    let reverseStrArray = str.split('').reverse();
    let reverseStr = reverseStrArray.join(''); 
  
    if (str === reverseStr){
      return true;
    }
  
    return false;
  }
  
  
  console.log(isPalidrome("radar"));
  console.log(isPalidrome("pop"));
  console.log(isPalidrome("hello"));
  
  