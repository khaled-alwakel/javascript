/**
 ** TWO ESSENTIAL PARTS OF A RECURSIVE FUNCTION
 *? 1: Base Case
 *? 2: Different input
 */

function countDown(num) {
  if (num <= 0) {
    console.log("All Done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

console.log(countDown(4));

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(4));

// FACTORIAL
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}
console.log(factorial(3));

function factorialRecursive(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
console.log(factorialRecursive(2));

// helper function with recursion
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// pure recursion

function collectOddValues(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5]));

/**
 * ? pure recursion tips
 * * for array => slice, spread operator, concate
 * ? for strings => slice , substr, substring
 * * for object => Object.assign, spread operator
 */
