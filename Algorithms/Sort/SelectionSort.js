const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(arr){
  
  for (let i=0;i < arr.length;i++){
    let min = i;
    let temp = arr[i];

    for (let j=i+1; j< arr.length;j++){
      if (arr[j]<arr[min]){
        // swap
        min = j;
      }
    }

    arr[i] = arr[min];
    arr[min] = temp;
  }
  
  return arr;

}


/*
selectionSort 
1. loops through two loops
  a. 1st loop - sets current index as min and temp = array[i]
  b. 2nd loop - start at i+1, compare to j to min, if min is greater, min is set to j
  c. 1st loop - array[i] = array[min], array[min] = temp 


*/
// function selectionSort(array) {
//   const length = array.length;
//   for(let i = 0; i < length; i++){
//     // set current index as minimum
//     let min = i;
//     let temp = array[i];
//     for(let j = i+1; j < length; j++){
//       if (array[j] < array[min]){
//         //update minimum if current is lower that what we had previously
//         min = j;
//       }
//     }
//     array[i] = array[min];
//     array[min] = temp;
//   }
//   return array;
// }

console.log("SelectionSort")
selectionSort(numbers);
console.log(numbers);