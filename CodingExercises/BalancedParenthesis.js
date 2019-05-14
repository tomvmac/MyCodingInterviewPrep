function isBalanced(str) {
  let openBraces = str.split("{").length;
  let closeBraces = str.split("}").length;

  return openBraces === closeBraces;
}

// function isBalanced(str){

//   let openBraces = 0;
//   let closeBraces = 0;

//   for (let i=0; i<str.length;i++){
//     if (str[i] === "{")
//       openBraces++;
//     if (str[i] === "}")
//       closeBraces++;
//   }

//   return openBraces === closeBraces;
// }

console.log("isBalanced('{{}}')", isBalanced("{{}}"));

console.log("isBalanced('{{}}')", isBalanced("{{}}}}"));
