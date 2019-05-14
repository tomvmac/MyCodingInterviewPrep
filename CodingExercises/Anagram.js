/*

Given two string, figure out of they are anagrams, which are words made with the same letters just in different sequence.

Strategy: 
1. convert both strings to lowercase
2. sort both string
3. 

*/

// Anagram using sort
// function isAnagram(str1, str2){
//   // get rid of anything that is not a letter
//   //str1.replace(/W/g, '');

//   let newStr1 = str1.toLowerCase().split('').sort().join('').trim();
//   let newStr2 = str2.toLowerCase().split('').sort().join('').trim();

//   return newStr1 === newStr2;
// }

// Anagram using map
function isAnagram(str1, str2) {
  let str1Map = {};
  let str2Map = {};

  // loop through str1 and create a map of letters
  for (let i = 0; i < str1.length; i++) {
    if (str1Map[str1[i]]) {
      str1Map[str1[i]]++;
    } else {
      str1Map[str1[i]] = 1;
    }
  }

  // loop through str2 and create a map of letters
  for (let i = 0; i < str2.length; i++) {
    if (str2Map[str2[i]]) {
      str2Map[str2[i]]++;
    } else {
      str2Map[str2[i]] = 1;
    }
  }

  // compare the maps lengths
  // console.log(Object.keys(str2Map).length)
  // console.log(Object.keys(str1Map).length)
  if (Object.keys(str2Map).length !== Object.keys(str1Map).length) {
    return false;
  }

  // loop through str2 and compare the two maps, if they are not equal, then return false
  // for (let i=0; i< str2.length;i++){
  //   if (str2Map[str2[i]] !== str1Map[str2[i]]){
  //       return false;
  //   }
  // }

  for (let key in str2Map) {
    if (str1Map[key] != str2Map[key]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("hello", "lleho"));
console.log(isAnagram("hello", "llesho"));
