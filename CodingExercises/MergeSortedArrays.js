console.log("Problem - Merge sorted arrays:");
console.log("Merge [1,3,6,9] and [2,4,6,8,10,12] to get [1,2,3,4,6,8,9,10,12]");


function merge(arr1, arr2){
  let arr1Index = 0;
  let arr2Index = 0;
  let mergedArr = [];
  let uniqueItems = [];

  while (arr1[arr1Index] || arr2[arr2Index]){
    if (arr1[arr1Index] < arr2[arr2Index]){
      if (!uniqueItems[arr1[arr1Index]]){
        mergedArr.push(arr1[arr1Index]);
        uniqueItems[arr1[arr1Index]] = true;
      }
      
      arr1Index++;
    } else {
      if (!uniqueItems[arr2[arr2Index]]){
        mergedArr.push(arr2[arr2Index]);
        uniqueItems[arr2[arr2Index]] = true;
      }
      arr2Index++;
    }
  }

  return mergedArr;
}


// function merge(arr1, arr2){

  
//   const mergedArray = [];
//   let arr1Index = 0;
//   let arr2Index = 0;

//   // Validation
//   if (!arr1)
//     return arr2;

//   if (!arr2)
//     return arr1;

//   while (arr1[arr1Index] || arr2[arr2Index]){
//     console.log(mergedArray);
//     if (arr1[arr1Index] < arr2[arr2Index]){
//       // Add the lesser value from the array to the new mergedArray
//       mergedArray.push(arr1[arr1Index]);
//       arr1Index++;
//     } else {
//       mergedArray.push(arr2[arr2Index]);
//       arr2Index++;
//     }
//   }
  
//   console.log(mergedArray)

// }


// function mergeDistinct(arr1, arr2){

  
//   const mergedArray = [];
//   let uniqueItems = {};
//   let arr1Index = 0;
//   let arr2Index = 0;

//   // Validation
//   if (!arr1)
//     return arr2;

//   if (!arr2)
//     return arr1;

//   while (arr1[arr1Index] || arr2[arr2Index]){
//     if (arr1[arr1Index] < arr2[arr2Index]){
//       // Add the lesser value from the array to the new mergedArray
//         if (!uniqueItems[arr1[arr1Index]]){
//           mergedArray.push(arr1[arr1Index]);
//           uniqueItems[arr1[arr1Index]] = true;
//         }
//         arr1Index++;
//     } else {
//         if (!uniqueItems[arr2[arr2Index]]){
//             mergedArray.push(arr2[arr2Index]);
//             uniqueItems[arr2[arr2Index]] = true;
//         }
//         arr2Index++;
          
          
//     }
//   }


//   console.log("uniqueItems", uniqueItems);
//   console.log("Answer", mergedArray);

// }

console.log(merge([1,3,6,9], [2,4,6,8,10,12]));

//mergeDistinct([1,3,6,9], [2,4,6,8,10,12]);
