// Dumb Approach

// function sort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {  [we will loop out of range i have to put stop  which is represented as the ordered element ]
//             console.log(j, j + 1)
//             if (arr[j] > arr[j + 1])
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

//         }
//     }
//     return arr
// }

// Slightly Better Approach

// function sort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length-i-1; j++) {
//             console.log(j, j + 1)
//             if (arr[j] > arr[j + 1])
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

//         }
//     }
//     return arr
// }

// Much Better Approach

function sort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}
console.log(sort([6, 4, 1, 3]));

// Optimized BubbleSort with noSwaps
const bubbleSort = function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
};

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
