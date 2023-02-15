//**  FOR LOOP ASSIGNMENTS  48 => 53 */

//** ASSIGNMENTS 1 */

// let start = 10;
// let end = 100;
// let exclude = 40;

// // Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100
// for (let i = start-start; i < end; i += start){
//     if (i === exclude) {
//         continue;
//     }
//     console.log(i+start);
// }
//============================================
//** ASSIGNMENTS 2 */

// console.log("-=-=-=-=-=-=-=-=-=-=")
// let start = 10;
// let end = 0;
// let stop = 3;

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03

// for (let i = start; i > end; i--){
    
//     if (i === start) {
//         console.log(i);
//     }
//     else {
//         console.log(`${end}${i}`)
//         if (i === stop) break;
//     }
// }


//======================================
// console.log("-=-=-=-=-=-=-=-=-=-=")
// // //** ASSIGNMENTS 3 */
// let start= 1;
// let end = 6;
// let breaker = 2;

// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// --4

// for (let i = start- start; i < end; i++){
//     console.log(i + start);
//     for (let j = start -start; j < start; j++){
//         console.log('--' , breaker);
//         console.log('--' , end - breaker)
//     }
// }
//=======================================
// //** ASSIGNMENTS 4 */
// let index = 10;
// let jump = 2;
// let end = 0;

// for (;;) {
//     console.log(index);
//     index -= jump;
//     if (index === jump) {
//         break;
//     }
//  }

// // Output
// 10
// 8
// 6
// 4
//==================================
// //** ASSIGNMENTS 5 */
// let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
// let letter = "a";

// // Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

// let counter = friends.indexOf("Ahmed");
// for (let i = friends.indexOf("Ahmed"); i < friends.length; i++){
//     if (friends[i][friends.indexOf("Ahmed")] === letter.toUpperCase()) {
//         continue;
//     }
//     counter++;
//     console.log(`${counter} => ${friends[i]}`);
// }
//======================================
// //** ASSIGNMENTS 6 */

// let start = 0;
// let swappedName = "elZerO";

// let arr = []
// for (let i = start; i < swappedName.length; i++){
//     if (swappedName[i] === swappedName[i].toUpperCase()) {
//         arr.push(swappedName[i].toLowerCase())
//     }
//     else if (swappedName[i] === swappedName[i].toLowerCase()) {
//         arr.push(swappedName[i].toUpperCase())
//     }
// }
// console.log(arr.join(""));
// Output
// "ELzERo"
//======================================
// //** ASSIGNMENTS 7 */
// let start = 0;
// let mix = [1, 2, 3, "A", "B", "C", 4];

// for (let i = start; i < mix.length; i++){
//     if (Number.isInteger(mix[i]) && mix[i] != 1) {
//         console.log(mix[i]);
//     }
// }


// Output
// 2
// 3
// 4

//*******************************************************/
//**  FOR LOOP ASSIGNMENTS  54 => 56 */
// let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
// let index = 0;
// let counter = 0;

// while (counter < friends.length) {
    
//     if(friends[counter][index] !== "A" && Number.isInteger(friends[counter]) === false) {
//         console.log(friends[counter]);
//     }
//     counter++;
// }
// Output
// "1 => Sayed"
// "2 => Mahmoud"


//*********************** LOOP CHALLENGE ********************************/

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

// let x = [];
// for (let i = 0; i < myAdmins.length; i++){
//     if (myAdmins[i] !== "Stop") {
//         x.push(myAdmins[i]);
//     } else {
//         break;
//     }
// }

// document.write(`<div>We Have ${x.length} Admins</div> <hr>`);

// for (let i = 0; i < x.length; i++) {
//     let counter = 0;
//     document.write(`<div>`);
//     document.write(`"The Admin For Team ${[i + 1]} Is ${x[i]}"`)
//     document.write(`<h3>Team Members:</h3>`)

//     for (let j = 0; j < myEmployees.length; j++){
      
//         if (myEmployees[j][0] !== x[i][0]) {
//             continue;
//         } else {
//             counter++;
//             document.write(`<p>-${counter} ${myEmployees[j]}</p>`)
//         }
//     }
//     document.write(`<hr>`);
//     document.write(`</div>`);
// }
