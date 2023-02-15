/**
 * * while loop
 */

let products = ["keyboard", "mouse", "pen", "pad", "monitor"];

let i = 0;
while (i < products.length) {
    console.log(products[i]);
    i += 1;
}
//============================
/**
 * * do while loop
 */

do {
    console.log(i);
    i++;
}
while (false); 

console.log(i);
    

let input = "3nn3#e"

function include(string, searchValue) {
    for (let i = 0; i < string.length; i++){
        if (string[i] === searchValue) {
            return ("true");
    }
    return ("false");
}
}
console.log(include(input,"3"))