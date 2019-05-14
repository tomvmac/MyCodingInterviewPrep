const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


function bubbleSort(arr){
  for (let i=0; i < arr.length; i++){
    for (let j=0; j < arr.length; j++){
      
      if (arr[j]>arr[j+1]){
        // swap
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}


// function bubbleSort(array) {
//   const length = array.length;
//   for (let i = 0; i < length; i++) {
//     for (let j = 0; j < length; j++) { 
//       if(array[j] > array[j+1]) {
//         //Swap the numbers
//         let temp = array[j]
//         array[j] = array[j+1];
//         array[j+1] = temp;
//       }
//     }        
//   }
// return arr;
// }

bubbleSort(numbers);
console.log(numbers);