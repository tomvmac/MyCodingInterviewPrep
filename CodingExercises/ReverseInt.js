function reverseInt(int){
    // convert int to string
    return int.toString().split('').reverse().join('')
  }
  
  console.log("reverseInt(1234) = ",reverseInt(1234))