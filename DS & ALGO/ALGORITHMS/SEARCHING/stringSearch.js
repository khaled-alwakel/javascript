function stringSearch(str, pattern) {
    let counter = 0;
    let i = 0
    while (i < str.length - pattern.length + 1) {
        if (str.slice(i, pattern.length + i) === pattern) {
            counter++;
            i += pattern.length
        }
        i++
    }
    return `Found ${counter} Matches`;

}
console.log(stringSearch('lorie loled', 'lo'));