// https://medium.com/outco/how-to-solve-the-house-robber-problem-f3535ebaef1b

let calculations = 0;

function houseRobberRecursive(arr) {
  
  function stealFromHouse(index) {
    calculations++;
    if(index >= arr.length) {
      return 0;
    }

    return Math.max(arr[index] + stealFromHouse(index + 2), stealFromHouse(index + 1));
  }
  return stealFromHouse(0);
}


function houseRobberRecursiveDyn(arr, index) {
  let cache = {};

   
  return function stealFromHouseDyn(arr, index) {
    calculations++;
    if(index >= arr.length) {
      return 0;
    }

    if (index in cache){
      return cache[index];
    }

    cache[index] = Math.max(arr[index] + stealFromHouseDyn(arr, index + 2), stealFromHouseDyn(arr, index + 1)); 
    return cache[index];
  }
  
}


console.log("houseRobberRecursive([3, 1, 2, 5, 4, 2])", houseRobberRecursive([3, 1, 2, 5, 4, 2]))  // => 10
console.log("calculations", calculations)

calculations = 0;


const houseRobberRecursiveFast = houseRobberRecursiveDyn();

console.log("houseRobberRecursiveFast([3, 1, 2, 5, 4, 2],0", houseRobberRecursiveFast([3, 1, 2, 5, 4, 2],0))  // => 10
console.log("calculations", calculations)