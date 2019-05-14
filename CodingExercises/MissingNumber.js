
function missingNumber(arr) {
    /*
    Strategy:
    1. Get the sum of numbers 
       total = n*(n+1)/2
    2  Subtract all the numbers from sum and you will get the missing number.
    */
    let sum = 0;
    // n is total number of items or numbers including the missing number
    let n = arr.length + 1,;
    let expectedSum = n * (n + 1) / 2;

    console.log("n", n)
    console.log("arr", arr)
    console.log("arr.length", arr.length)


    for (let i=0; i < arr.length; i++) {
        sum += arr[i];
    }

    console.log(expectedSum);
    console.log(sum)
    return expectedSum - sum;
}




console.log("missingNumber([1, 2, 4, 6, 3, 7, 8]", missingNumber([1, 2, 4, 6, 3, 7, 8]));