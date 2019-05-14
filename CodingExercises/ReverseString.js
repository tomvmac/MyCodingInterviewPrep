function reverseWords(str){
    // Hello my name is Tom
    let revWords = [];
    let wordLen = 0;
  
    for (let i=str.length-1;i>=0; i--){
      if (str[i] == ' ' || i==0){
        revWords.push(str.substr(i, wordLen+1));
        wordLen = 0;
      }
      else {
        wordLen++;
      }
    }
  
    return revWords.join(' ');
  }
  
  
  function reverseString(str){
    if (str.length <= 1){
      return str;
    }
    return reverseString(str.substr(1)) + str[0];
  }
  
  
  // function reverseWords(str){
  //   // Hello my name is Tom
  //   let strArr = str.split(' ');
  //   let reverseWords = [];
  //   for (i=strArr.length-1;i>=0;i--){
  //     reverseWords.push(strArr[i]);
  //   }
  
  //   return reverseWords.join(' ');
  
  // }
        
  
  
  // function reverseWords(str){
  //  var rev = [], 
  //      wordLen = 0;
  //  for(var i = str.length-1; i>=0; i--){
  //    if(str[i]==' ' || i==0){
  //      rev.push(str.substr(i,wordLen+1));
  //      wordLen = 0;
  //    }
  //    else
  //      wordLen++;
  //  }
  //  return rev.join(' ');
  // }
  
  
  // Reverse string by decrementing loop
  // function reverseString(str){
  //   let strArr = str.split('');
  
  //   let reversedArr = [];
  //   for (i=strArr.length-1;i>=0;i--){
  //     reversedArr.push(strArr[i]);
  //   }
  //   return reversedArr.join('');
  // }
  
  // function reverseString(str){
    // let strArr = str.split('');
  
    // let reversedArr = [];
    // for (i=strArr.length-1;i>=0;i--){
    //   reversedArr.push(strArr[i]);
    // }
    // return reversedArr.join('');
  // }
  
  // Reverse string by recursion
  // function reverseString(str){
    
  //   // base case
  //   if (str.length <= 1){
  //     return str;
  //   }
  
  //   // recursive case
  //   return reverseString(str.substr(1)) + str[0];
  
  // }
  
  // function spinWords(str){
  //   let newSentence = [];
  //   let strArray = str.split(' ');
  
  //   for (let i=0; i<strArray.length;i++){
  //     if (strArray[i].length < 5){
  //       newSentence.push(strArray[i]);
  //     } else {
  //       newSentence.push(strArray[i].split('').reverse().join(''));
  //     }
  //   }
  //   return newSentence.join(' ');
  // }
  
  
  // console.log(reverseString('Tom'));
  
  console.log("reverseWords('Hello my name is Tom'))", reverseWords('Hello my name is Tom'));
  
  
  // console.log("spinWords('Hey fellow warriors')",spinWords('Hey fellow warriors'));
  // console.log("spinWords('This is a Test')",spinWords('This is a Test'));
  
  // reverse("")
  // reverse(m) -> m
  // reverse(om) -> o
  // reverse(Tom) -> T
  
  
  //"" + m + o + T