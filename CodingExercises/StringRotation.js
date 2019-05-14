/*
 Check if two given strings are rotations of each other.

AACD and ACDA are string rotations
ACAD and ACDA are not string rotations

*/

function areRotations(str1, str2){

    // The two string lengths must be the same.
    // str2 must be a substring of str1 concatenated with str1
  
    if (str1.length === str2.length && (str1 + str1).indexOf(str2) != -1)
      return true;
    else
      return false;
  }
  
  
  console.log("areRotations('AACD', 'ACDA')", areRotations("AACD", "ACDA"))
  console.log("areRotations('ACAD', 'ACDA')", areRotations("ACAD", "ACDA"))
  
  