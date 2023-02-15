/**
 * write a function called sumZero which accepts a [SORTED] array of integers
 * the function should find the FIRST pair where the sum is 0
 * return an array that include both values that sum to zero or undefined if pair does not exist
 */

//**  NAIVE SOLUTION  notice that array must be sorted

function sumZero(arr) {
  if (!arr) return undefined;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([1, 2, 3]));

//*? REFACTORED SOLUTION
function reFactoredSumZero(arr) {
  if (!arr) return undefined;
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum == 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
}
console.log(reFactoredSumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
console.log(reFactoredSumZero([-2, 0, 1, 3]));
console.log(reFactoredSumZero([1, 2, 3]));

//=====================================
// **ANOTHER EXAMPLE

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]; // like pulling unique values in the beginning of array
    }
  }
  return arr.slice(0, i + 1); // slice to the repeated values
}
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
console.log(countUniqueValues([]));
