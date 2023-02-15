/**
 *  write a function called same , which accepts two arrays the function should return true if every value in the array has it's corresponding value squared in the second array 
 the frequency value must be the same
 */
//NAIVE SOLUTION [ indexOf loop over entire arr2]
console.time('looper')

function sameWithNestedLoop(arr1, arr2) {
    if (arr1.length !== arr2.length) return false
    for (let i in arr1) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) return false
        arr2.splice(correctIndex, 1)
    }
    return true
}
console.log(sameWithNestedLoop([1, 2, 3], [9, 1, 4]))
console.timeEnd('looper')
    //REFACTORED SOLUTION
console.time('loop')

function sameRefactored(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for (let val of arr1)
        frequencyCounter1[val] = (frequencyCounter1[val] + 1) || 1
    for (let val of arr2)
        frequencyCounter2[val] = (frequencyCounter2[val] + 1) || 1

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) { // unlike indexOf 
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

console.log(sameRefactored([1, 2, 3, 2], [9, 1, 4, 4]))
console.timeEnd('loop')