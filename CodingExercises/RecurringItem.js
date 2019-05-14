// Problem: Find first recurring item given an array

// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4] return 2
// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4] return 1

function findFirstRecurringItem(arr1){
    let itemDict = {};
  
    for (let i=0;i < arr1.length;i++){
      if (!itemDict[arr1[i]]){
        itemDict[arr1[i]] = true;
      } else {
        return arr1[i];
      }
    }
  
    return false;
  
  
  }
  
  function findFirstNonRecurringItem(arr1){
    // First loop - do a count for each item in the map
    // Second loop - find the item in map that has count of 1 and return item
    let itemMap = {};
  
    for (let i=0; i < arr1.length;i++){
      if (!itemMap[arr1[i]]){
        itemMap[arr1[i]] = 1;
      } else {
        itemMap[arr1[i]] = itemMap[arr1[i]]+1;
      }
    }
  
    for (let i=0; i < arr1.length;i++){
      if (itemMap[arr1[i]]){
        console.log(itemMap[arr1[i]])
        if (itemMap[arr1[i]] ==1)
        {
          return arr1[i];
        }
      } 
    }
  
    return false;
  
  }
  
  
  // function findFirstRecurringItem(arr1){
  //   let itemMap = {};
  
  //   // loop through array
  //   for (let i=0; i < arr1.length; i++){
      
  //     if (!itemMap[arr1[i]]){
  //         // if item is not in itemMap, add to the map
  //       itemMap[arr1[i]] = true;
  //     } else {
  //       //otherwise return item as first recurring item
  //       return arr1[i];
  //     }
  //   }
  
  //   return "No recurring items found.";
  // }
  
  
  console.log("findFirstRecurringItem([2, 5, 1, 2, 3, 5, 1, 2, 4])", findFirstRecurringItem([2, 5, 1, 2, 3, 5, 1, 2, 4]));
  
  console.log("findFirstRecurringItem([2, 1, 1, 2, 3, 5, 1, 2, 4])", findFirstRecurringItem([2, 1, 1, 2, 3, 5, 1, 2, 4]));
  
  console.log("findFirstRecurringItem([2, 3, 5, 4])", findFirstRecurringItem([2, 3, 5, 4]));
  
  console.log("findFirstNonRecurringItem([1,1,2,3,4,4])", findFirstNonRecurringItem([1,1,2,3,4,4]));
  