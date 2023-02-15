function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let char of str1)
        frequencyCounter1[char] = (frequencyCounter1[char] + 1) || 1;
    for (let char of str2)
        frequencyCounter2[char] = (frequencyCounter2[char] + 1) || 1;
    console.log(frequencyCounter1)
    console.log(frequencyCounter2)
    for (let key in frequencyCounter1) {
        if (!key in frequencyCounter2) return false
        if (frequencyCounter2[key] !== frequencyCounter1[key]) return false
    }
    return true
}



console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('rat', 'car')) // false

// MORE IMPROVEMENT  ON MY CODE

function validAnagram2(first, second) {
    if (first.length !== second.length) return false;
    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero then it's not an anagram
        if (!lookup[letter]) return false;
        else lookup[letter] -= 1;

    }
    return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
console.log(validAnagram2('anagrams', 'nagaramm'))