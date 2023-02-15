// arrays
let myFriends = ["Alice", "Bob", "Charlie", ["Sam", "Tom"]];
console.log(myFriends);
console.log(`hello ${myFriends[0]}`);
console.log(`hello ${myFriends[1]}`);
console.log(`hello ${myFriends[2]}`);
console.log(` ${myFriends[2][0]}`);//C

console.log(` ${myFriends[3][1][0]}`);//T

console.log(myFriends);
myFriends[0] = "David";
console.log(myFriends);
myFriends[3] = "jerry";
console.log(myFriends);
myFriends[4] = "tito";
console.log(myFriends);

console.log(typeof myFriends);
console.log(Array.isArray(myFriends)); // true
//===========================================
console.log(myFriends.length); //4

// if i go to un existed index it will add 2 indexes on the real length
myFriends[6] = "joker";
console.log(myFriends);
console.log(myFriends.length); //7
//===============================
 // dynamic add to array 
 console.log(myFriends); 
myFriends[myFriends.length] = "batman"; // add batman to last index 
console.log(myFriends); 

myFriends[myFriends.length] = "shaun"; // add batman to last index 
console.log(myFriends); 

//===== update last index always
myFriends[myFriends.length-1] = "sam"; // add batman to last index 
console.log(myFriends); 

// control the array 
myFriends.length = 3;
console.log(myFriends);