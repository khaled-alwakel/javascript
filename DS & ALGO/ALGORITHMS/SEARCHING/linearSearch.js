// JAVASCRIPT
function linearSearch(arr, val) {
    for (let i in arr)
        if (arr[i] === val) return i
    return -1
}
console.log(linearSearch([1, 2, 44, 3, 6], 6))