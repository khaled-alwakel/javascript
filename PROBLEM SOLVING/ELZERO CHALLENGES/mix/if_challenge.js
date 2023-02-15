/**
 * if challenge
 */
let a = 10;

if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 to 40");
} else if (a > 40) {
    console.log(">40")
} else {
    console.log("Unknown");

}

// write the ternary if  syntax
a < 10 ?
    console.log(10)
    : a >= 10 && a <= 40 ?
        console.log("10 to 40")
        : a > 40 ?
            console.log("> 60")
            : console.log("unknown");



//==================

let st = "Elzero Web School";

if ((st.length*2).toString() === "34") {
    console.log("Good");
}

// w position my change
if ( st.substr(st.indexOf("W"), 1) === "W") {
   console.log("Good");
}

if ( st !== "string") {
    console.log("Good");
}

if ( typeof st.length === "number") {
    console.log("Good");
}
if (st.slice(0, 6) + st.slice(0, 6) === "ElzeroElzero") {
    console.log("Good");
}
