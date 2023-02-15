//* NEWBIE
// function toAccounting(n) {
//     if (n < 0) {
//         return'('+Math.abs(n) +')'
//     } else {
//         return n.toString();

//     }
// }
// console.log(toAccounting(0));
// console.log(toAccounting(10));
// console.log(toAccounting(-5))
// console.log(toAccounting(undefined))

//* ADVANCE
function numberToAccounting(number) {
    if (number != null) {
        if (number < 0) {
            return `(${Math.abs(number)})`
        } else {
            return number.toString();
        }
    }
}

//* PRO
function numberToAccounting(number) {
    if (number == null) return // guard clause
    if (number < 0) return `(${Math.abs(number)})`
    return number.toString()

}
console.log(numberToAccounting(0));
console.log(numberToAccounting(10));
console.log(numberToAccounting(-5));
console.log(numberToAccounting(undefined));