// Resources:
// https://leetcode.com/problems/missing-number/solution/


function missingNumber(arr) {
    /*
    Strategy:
    1. Get the sum of numbers 
       total = n*(n+1)/2
    2  Subtract all the numbers from sum and you will get the missing number.
    */
    let sum = 0;
    // n is total number of items or numbers including the missing number
    let n = arr.length;
    let expectedSum = n * (n + 1) / 2;

    // console.log("n", n)
    // console.log("arr", arr)
    // console.log("arr.length", arr.length)


    for (let i=0; i < arr.length; i++) {
        sum += arr[i];
    }

    // console.log(expectedSum);
    // console.log(sum)
    return Math.abs(expectedSum - sum);
}


// function missingNumber(arr){
//     // contiguous list of number with 1 missing number

//     let sum = 0;
//     let numMap = new Map();
//     let expectedNumCount = arr.length+1;  // Add extra to account for missing number

//     // Add all numbers from arr to numMap
//     for (let i=0; i<arr.length;i++){
//       numMap.set(arr[i], arr[i]);
//     }

//     // Loop through expectedNumCount
//     for (let i=0; i<expectedNumCount; i++){
     
//       if (numMap.get(i) !=i){
//         return i;
//       }
      
//     }

//     return -1;

// }




console.log("missingNumber([3,0,1]", missingNumber([3,0,1]));

console.log("missingNumber([8,6,4,2,3,5,7,0,1]", missingNumber([8,6,4,2,3,5,7,0,1]));



// console.log("missingNumber([1, 2, 4, 6, 3, 7, 8]", missingNumber([1, 2, 4, 6, 3, 7, 8]));

// console.log("missingNumber([9,6,4,2,3,5,7,0,1]", missingNumber([9,6,4,2,3,5,7,0,1]));