// //*ASSIGNMENT 115 => 122

// //*ASSIGNMENT 1
// // let myNumbers = [1, 2, 3, 4, 5];

// // // Write Your Destructuring Assignment Here
// // let [a, , , ,e] = myNumbers

// // console.log(a * e); // 5
// //=======================================\
// //*ASSIGNMENT 2
// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// // Write Your Destructuring Assignment Here
// let [a, b, c, [d, e, [f, g]]] = mySkills;

// console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// // My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
// //==================================================================

// //*ASSIGNMENT 3

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];

// // Play With Arrays To Prepare For Destructuring
// let newArray = [];
// newArray[0] = arr3[1];
// newArray[1] = arr3[2];
// newArray[2] = arr1[0];

// // Write Your Destructuring Assignment Here
// [a, b, c] = newArray
// console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// // My Best Friends: Shady, Mahmoud, Ahmed
//===================================

//*ASSIGNMENT 4

// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
//   };
  
//   // Write Your Destructuring Assignment Here
// let {age:a, working:w } = member;
  
//   console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
//   // My Age Is 30 And Iam Not Working
  
// let {country:c } = member;
//   console.log(`I Live in ${c}`);
//   // I Live in Egypt
  
//   let[h1, ,h3]= member.hobbies
//   console.log(`My Hobbies: ${h1} And ${h3}`);
  // My Hobbies: Reading And Programming
  //========================================

//*ASSIGNMENT 5
// const game = {
//     title: "YS",
//     developer: "Falcom",
//     releases: {
//       "Oath In Felghana": ["USA", "Japan"],
//       "Ark Of Napishtim": {
//         US: "20 USD",
//         JAP: "10 USD",
//       },
//       Origin: "30 USD",
//     },
//   };
  
//   // Write Your Destructuring Assignment/s Here
//   let {title:t} = game;
//   console.log(`My Favourite Games Style Is ${t} Style`);
//   // My Favourite Games Style Is YS Style
  
//   let {developer:d} = game
//   console.log(`And I Love ${d} Games`);
//   // And I Love Falcom Games
  
//   let o = Object.keys(game.releases)[0];
//   let[u,j]=game.releases[Object.keys(game.releases)[0]]
//   console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
//   // My Best Release Is Oath In Felghana It Released in USA & Japan
  
//   let a = Object.keys(game.releases)[1];
//   console.log(`Although I Love ${a}`);
//   // Although I Love Ark Of Napishtim
  
//   let {US:u_price} = game.releases["Ark Of Napishtim"];
//   console.log(`${a} Price in USA Is ${u_price}`);
//   // Ark Of Napishtim Price in USA Is 20 USD
  
//   let {JAP:j_price} = game.releases["Ark Of Napishtim"];
//   console.log(`${a} Price in JAP Is ${j_price}`);
//   // Ark Of Napishtim Price in JAP Is 10 USD
  
//   let{Origin:or} = game.releases;
//   console.log(`Origin Price Is ${or}`);
  // Origin Price Is 30 USD
  //========================================

//*ASSIGNMENT 6



let chosen = 1;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

switch(chosen){
    // If chosen === 1
    case 1:
        let { title, age, available,skills:[,css]} = myFriends[0];
        console.log(`${title} \n ${age} \n ${available === true ? "Available" : "Not available"} \n ${css}`)
    // "Osama"
    // 39
    // "Available"
    // "CSS"

    // If chosen === 2
       case 2:
        let { title:t2, age:a2, available:av2,skills:[,Django]} = myFriends[1];
        console.log(`${t2} \n ${a2} \n ${av2 === true ? "Available" : "Not available"}\n ${Django}`)
    // "Ahmed"
    // 25
    // "Not Available"
    // "Django"

    // If chosen === 3
     case 3:
        let { title:t3, age:a3, available:av3, skills:[,Laravel] } = myFriends[2];
        console.log(`${t3} \n ${a3} \n ${av3 === true ? "Available" : "Not available"} \n ${Laravel}`)
    // "Sayed"
    // 33
    // "Available"
    // "Laravel"
}
