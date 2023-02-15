
// for(i = 0; i <= 5 ; i++) {
//     for(j = 0; j <=i; j++) {
//         process.stdout.write("#");
//     }
//     process.stdout.write("\n");
    
// }
// for(i = 4; i >0 ; i--) {
//     for(j = i; j >0; j--) {
//         process.stdout.write("#");
//     }
//     process.stdout.write("\n");
    
// }
// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let x = 0; x < contacts.length; x++) {
        if (contacts[x].firstName === name) {
            if (contacts[x].hasOwnProperty(prop)) {
            return contacts[x][prop];
            } else {
            return "No such property";
            }
        }

    }
    return "No such contact";

    // Only change code above this line
  }
  
 console.log( lookUpProfile("Kristian", "lastName"));
 console.log(contacts[0])
