/**
 * arrays methods [ adding and removing]
 * * shift () remove first element from array 
 * * unshift ("","") add element to the first
 * * push ("","") add element to the end 
 * *pop() remove last element from array 
 */
let myFriends = ["Alice", "Bob", "Charlie", "Sam", "Tom", "joker"];
console.log(myFriends);

// shift  remove the first element and return the element 
let element = myFriends.shift(); // remove the first element and store it on variable
console.log(element);
console.log(myFriends);
//=======================

// unshift insert elements in the end of array 

myFriends.unshift("Osama", "Doug");
console.log(myFriends);

//======================

// push  inserts index in the end of array 

myFriends.push("Tamer", "Waleed");
console.log(myFriends);

//========================
 // pop  delete the last element 
 let pop = myFriends.pop(); // remove the last element and store it on variable
console.log(pop);
console.log(myFriends);

