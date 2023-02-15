// PROBLEM SOLVING STRATEGIES;
/**
 * UNDERSTAND THE PROBLEM
 *        [can i restart the problem in my way ]
 *        [what are te [INPUTS] that go into the problem]
 *        [what are the [OUTPUT] that should come from the solution to the problem]
 *        [can the output determined from the inputs]
 *        [how to label the important pieces of data that are a part of the problem ]
 * EXPLORE CONCRETE EXAMPLES [EMPTY || INVALID INPUTS]
 * BREAK IT DOWN
 * SOLVE / SIMPLIFY
 * LOOK BACK AND REFACTOR
 */

// write a function which take a string and return counts of each character in the string

function charCount(str) {
  // deal with empty input
  if (!str) return undefined;
  // make an object to return the value of each character
  let charCountRecord = {};
  // loop over the string characters
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase(); // ignore the letter case
    // only deal with alphanumeric
    if (/[a-z0-9]/.test(char)) {
      // if it isn't in isVisited push it with value 1
      if (!str[i] in charCountRecord) charCountRecord[char] = 1;
      // if it is already in isVisited increment it's value
      else charCountRecord[char] = charCountRecord[char] + 1 || 1;
    }
  }
  // return object
  return charCountRecord;
}

// REFACTOR
function countCharactersOf(string) {
  if (!string) return undefined;
  let countingRecord = {};
  for (let char of string) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      // means if there is a value increment if false make value = 1
      countingRecord[char] = countingRecord[char] + 1 || 1;
    }
  }
  return countingRecord;
}

// notice that regular expression maybe slow here is a good approach with helper function
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 69 && code < 123)
  ) {
    // lower alpha (a-z)
    return false;
  }
  return true;
}

console.log(countCharactersOf("i loOOove!")); // {a:4}
