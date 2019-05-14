console.log("Problem - Find if Common Items exist in Arrays:");
console.log("['a', 'b', 'c', 'x'],['z','y','x'] should yield true");


function containsCommonItem(arr1, arr2){

  let foundMap = {};

  for (let i=0;i<arr1.length;i++){
    foundMap[arr1[i]] = true;
  }

  for (let j=0;j<arr2.length;j++){
    if (foundMap[arr2[j]]){
      return true;
    }
  }
  
  return false;
}


// function containsCommonItem( arr1, arr2){
//   for (let i=0; i<arr1.length; i++){
//     for (let j=0; j<arr2.length; j++){
//       console.log(arr1[i], arr2[j]);
//       if (arr1[i] === arr2[j]){
//         return true;
//       }
//     }
//   }
//   return false;

// }

// function containsCommonItem( arr1, arr2){
//   // loop through arr1 and create object where properties === items in the array
//   let map = {};
//   for (let i=0; i<arr1.length; i++){
//     if (!map[arr1[i]]){
//       const item = arr1[i];
//       map[item] = true;
//     }
//   }
//   console.log(map);


//   // loop through arr2 and check if arr2 item is on object

//   console.log(arr1);
//   console.log(arr2);

//   for (let j=0; j<arr2.length; j++){
//     if (map[arr2[j]]){
//       console.log("true");
//       return true
//     } 
//   }
  
//   console.log("false");
//   return false;

// }

//containsCommonItemBruteForce(['a', 'b', 'c', 'x'],['z','y','i']);
//containsCommonItemBruteForce(['a', 'b', 'c', 'x'],['z','y','x']);


console.log(containsCommonItem(['a', 'b', 'c', 'x'],['z','y','i']));
console.log(containsCommonItem(['a', 'b', 'c', 'x'],['z','y','x']));