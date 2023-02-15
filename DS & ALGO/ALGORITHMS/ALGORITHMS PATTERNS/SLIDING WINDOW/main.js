/**
 Write A function  Called maxSubArraySum Which Accepts An Array Of Integers And A Number Called n ,
The Function Should Calculate The Maximum Sum Of n Consecutive Elements In The Array 
 */

// NAIVE APPROACH
function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;

  var max = -Infinity;
  for (let i = 0; i < arr.length - num; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(temp, max);
  }
  return max;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// REFACTORED
function maxSubarraySum2(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
    console.log(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
