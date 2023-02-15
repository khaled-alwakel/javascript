/**
 * * for loop
 * 
 */
 let myFriends = [1,2, "Ahmed", "Sayed", "Osama", "Gamal", "Ameer"];

// for (let i = 0; i < myFriends.length; i++){
//     console.log(myFriends[i]);
// }

let names = [];

for (let i = 0; i < myFriends.length; i++){
    if (typeof myFriends[i] === 'string') {
        names.push(myFriends[i]);
    }
}

console.log(names);

//=================
//* nested loop

let products = ["keyboard","mouse", "pen", "pad", "monitor"];

let colors = ["red", "green", "black"];

let models = ["202", "2021"];

for (let i = 0; i < products.length; i++){
    console.log("=".repeat(10));
    console.log(`# ${products[i]}`); 
    console.log("=".repeat(10));
    //nested loop
    console.log("colors:")
    for (let j = 0; j < colors.length; j++){
        console.log(`- ${colors[j]}`);
    }
    // another nested loop
    console.log("models:")
    for (let k = 0; k < models.length; k++){
        console.log(`- ${models[k]}`);
    }
}

//==============================
console.log("========= control loop =========");
//==============================
//* control loop

// label => identifier to control break and continue

mainLoop:for (let i = 0; i < products.length; i++) { 
   
    console.log(products[i]);

    nestedLoop:for (let j = 0; j < colors.length; j++){
        console.log(`-${colors[j]}`);
        if (colors[j] === "green") {
            break nestedLoop;
        }
    }
}

// advanced loop
// for (; ;){
//     console.log(products[i])
//     i++;
//     if (i === products.length) {
//         break;
//     }
// }