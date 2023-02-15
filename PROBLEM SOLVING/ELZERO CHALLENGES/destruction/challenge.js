//* Destructing Challenge

let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

for (let i = 1; i <= myFriends.length; i++){
  chosen = i;
  if (chosen === i) {
    let { title: t, age: a, available: av, skills: [, sk2] } = myFriends[chosen - true];
    console.log(t);
    console.log(a);
    av? console.log("Available"): console.log("Not Available")
    console.log(sk2);
    console.log("=-=".repeat(10))
  }
}

