const {
    performance
  } = require('perf_hooks');
  
  function search (arr, num) { 
         
      for (let i=0;i<arr.length;i++){
        if (arr[i] === num){
          return true;
        }
      }
      return false;
  } 
     
  // Driver code 
  let arr = [1, 3, 5, 7, 8, 9]; 
  
  let num = 97;
  
  // let num = 5; 
     
  console.log(performance.now())   
  if (search(arr, num, 0, arr.length-1)) 
      console.log("Found"); 
  else 
      console.log("Not Found"); 
  
  console.log(performance.now())   
  