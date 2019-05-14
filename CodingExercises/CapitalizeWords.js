// Given: hello my name is tom -> Hello My Name Is Tom

function capitalWords(str){
    // create array from str delimited by ' '
    let strArray = str.split(' ');
    let capitalizeWords = [];
  
    // loop through
    for (let i=0; i<strArray.length; i++){
      let firstChar = strArray[i].substr(0,1).toUpperCase();
      let remainChars = strArray[i].substr(1);
      capitalizeWords.push(firstChar + remainChars);
    }
  
    return capitalizeWords.join(' ');
  
  }
  
  console.log("capitalWords('hello my name is tom')",capitalWords('hello my name is tom'));