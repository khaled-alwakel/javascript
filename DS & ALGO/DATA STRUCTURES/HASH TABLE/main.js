let hashed = "A".charCodeAt(0);
let position = "A".charCodeAt(0) - 64;

let total = 0;
let string = "hello";
total += string.charCodeAt(0) - 96;
total += string.charCodeAt(2) - 96;
total += string.charCodeAt(1) - 96;
total += string.charCodeAt(3) - 96;
total += string.charCodeAt(4) - 96;

let len = "hello".length;
console.log(total % len);

//===============================

function hash(key, arraylength) {
  let total = 0;
  for (let char of key) {
    // map 'a' to 1, 'b' to 2, 'c' to 3 ... etc
    let value = char.charCodeAt(0) - 96;
    total += value;
  }
  return total % arraylength;
}

console.log(hash("hello", 10));
console.log(hash("goodbye", 10));
console.log(hash("hey", 10));

/* problem with that function is 
1: it only hash strings 
2: not constant time  larger string more time to hash 
3: could be a little more random 
*/

// improved function
function improvedHash(key, arraylength) {
  let total = 0;
  let WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = total * WEIRD_PRIME + value;
  }
  return total % arraylength;
}
console.log(improvedHash("hello", 10));
console.log(improvedHash("goodbye", 10));
console.log(improvedHash("hey", 10));
