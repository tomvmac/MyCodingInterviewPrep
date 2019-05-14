const {
    performance
  } = require('perf_hooks');
  
  function search (arr, num, start, end){
  
    if (start > end)
      return false;
  
    let mid = Math.floor((start + end)/2);
  
    if (arr[mid] == num){
      return true;
    }
  
    if (num < arr[mid]){
      return search(arr, num, start, mid-1);
    } else {
      return search(arr, num, mid+1, end);
    }
  
  }
  
  
  
  // function search (arr, num, start, end) { 
         
  //     // Base Condtion 
  //     if (start > end) return false; 
     
  //     // Find the middle index 
  //     let mid=Math.floor((start + end)/2); 
     
  //     // Compare mid with given key x 
  //     if (arr[mid]===num) return true; 
            
  //     // If element at mid is greater than x, 
  //     // search in the left half of mid 
  //     if(arr[mid] > num)  
  //         return search(arr, num, start, mid-1); 
  //     else
    
  //         // If element at mid is smaller than x, 
  //         // search in the right half of mid 
  //         return search(arr, num, mid+1, end); 
  // } 
     
  // Driver code 
  //let arr = [1, 3, 4, 7, 8, 9];
  //let arr = [1, 3, 5, 7, 8, 9]; 
  let arr = [3, 8, 9, 8, 9,417, 8, 9, 8, 9,4,6,3, 17, 8, 9, 8, 9,4,1,4,5,7, 8, 95];
  
  
  let num = 97; 
     
  console.log(performance.now())   
  if (search(arr, num, 0, arr.length-1)) 
      console.log("Found"); 
  else 
      console.log("Not Found"); 
  
  console.log(performance.now())   
  