
function findDuplicates(arr1){
    let itemDict = {};
    let duplicateArr = [];
  
    for (let i=0;i < arr1.length;i++){
      if (!itemDict[arr1[i]]){
        itemDict[arr1[i]] = true;
      } else {
        duplicateArr.push(arr1[i]);
      }
    }
  
    return duplicateArr;
  }
  
  
  function removeDuplicates(arr1){
    let itemDict = {};
    let uniqueArr = [];
  
    for (let i=0;i < arr1.length;i++){
      if (!itemDict[arr1[i]]){
        itemDict[arr1[i]] = true;
        uniqueArr.push(arr1[i]);
      } 
    }
  
    return uniqueArr;
  
  }
  
  
  function removeDuplicatesSorted(arr1){
    let uniqueArr = [];
  
    for (let i=0; i<arr1.length-1;i++){
      if(arr1[i] != arr1[i+1]){
        uniqueArr.push(arr1[i]);
      }
    }
  
    return uniqueArr;
  
  }
  
  
  console.log("findDuplicates([1,2,2,3,4,4,5]) = ", findDuplicates([1,2,2,3,4,4,5]));
  console.log("removeDuplicatesSorted([1,2,2,5,5,5,6,7,7,8,9,2]) = ", removeDuplicatesSorted([1,2,2,5,5,5,6,7,7,8,9,2]));
  
  console.log("removeDuplicatesSorted([2,1,3,4,1,5,6,7,6,5]", removeDuplicatesSorted([2,1,3,4,1,5,6,7,6,5]));
  
  
  console.log("removeDuplicates([1,2,2,5,5,5,6,7,6,7,2,8,9]) = ", removeDuplicates([1,2,2,5,5,5,6,7,6,7,2,8,9,2]));
  console.log("removeDuplicates([2,1,3,4,1,5,6,7,6,5]", removeDuplicates([2,1,3,4,1,5,6,7,6,5]));