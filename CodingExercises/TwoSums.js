function twoSum(arr, sum){
    let complementMap = {};
    let sums = [];
  
    for (let i=0; i< arr.length;i++){
      let complement = sum - arr[i];
      if (complementMap[complement]){
        sums.push([complement, arr[i]]);
      }
      complementMap[arr[i]] = arr[i];
  
    }
  
    return sums;
  
  }
  
  
  
  // our two sum function which will return
  // all pairs in the array that sum up to S
  // function twoSum(arr, S) {
  
  //   var sums = [];
  
  //   // check each element in array
  //   for (var i = 0; i < arr.length; i++) { 
  
  //     // check each other element in the array
  //     for (var j = i + 1; j < arr.length; j++) {
  
  //       // determine if these two elements sum to S
  //       if (arr[i] + arr[j] === S) {
  //         sums.push([arr[i], arr[j]]);
  //       }
  
  //     }
  
  //   }
  
  //   // return all pairs of integers that sum to S
  //   return sums;
  
  // }
  
  
  
  
  
  console.log(twoSum([3, 5, 2, -4, 8, 11], 7));      