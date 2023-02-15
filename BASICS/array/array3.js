/**
 * *arrays method [search]
 * * indexOf (search element, from index [opt])
 * * lastIndexOf (search element, from index [opt])
 * * includes(valueToFind, fromIndex [opt]) [es7]
 */

let myFriends = ["alice", "bob", "charlie", "david", "bob", "doug"];
console.log(myFriends);

// search index of 
console.log(myFriends.indexOf("bob")); // return index of first bob
console.log(myFriends.indexOf("bob", 2)); // start from index 2 here he will get index of second bob which is 4


console.log(myFriends.lastIndexOf("bob"));  // return the first bob from last  right to left but normal index 
console.log(myFriends.lastIndexOf("bob", -3));  // he will start search from -3 second element from last 

console.log(myFriends.includes("bob", 3)); // return true or false

if (myFriends.indexOf("ahmed") === -1) {  // -1 return when he didn't find anything
    console.log("Not Found"); 
}

console.log(myFriends.indexOf("ahmed")); // -1
console.log(myFriends.lastIndexOf("ahmed")); // -1