// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // let textArray = s.split(" ");
  // textArray = textArray.filter((ele) => ele );
  // return textArray[textArray.length - 1].length;

  return s.trim().split(" ").pop().length;

};
console.log(lengthOfLastWord("hello world    "));

//another solution
// return s.trim().split(" ").pop().length;
