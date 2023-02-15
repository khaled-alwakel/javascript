function binarySearch(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (num === arr[middle]) return `${num} Found In Index ${middle}`;
        else if (num < arr[middle]) end = middle - 1;
        else start = middle + 1;
    }
    return ` ${num} Not Found!`
}
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28));