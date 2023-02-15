/** ASSIGNMENTS 102 =>110
*/
// ASSIGNMENT 1 
// let answer = prompt("Print Number From - To", "example: 5-20");
// answer = answer.split("-");
// start = +answer[0];
// end = +answer[1];
// for(let i =start; i<=end;i++){
//     console.log(i)
// }

// ASSIGNMENT 2

let box = document.createElement("div");
boxText = document.createTextNode("Welcome");
box.appendChild(boxText);

let desc = document.createElement("p");
descText = document.createTextNode("Welcome To Elzero Web School");
desc.appendChild(descText);
box.appendChild(desc)

let cancel = document.createElement("div");
cancelText = document.createTextNode("x");
cancel.appendChild(cancelText);
box.appendChild(cancel)



//style
let body = document.body;

body.style.cssText =
    `display:grid;
    place-items:center;
    `
box.style.cssText =
`
    text-align:center;
    background-color:#eee;
    font-size:1.4rem;
    font-weight:600;
    padding:12px;
    width:50%;
    height:80px;
    margin-top:200px;
    padding:20px;
    position:relative;

`
cancel.style.cssText = 
`
    position:absolute;
    background-color:red;
    width:25px;
    height:25px;
    border-radius:50%;
    top:-10px;
    right:-10px;
    color:#fff;
    font-weight:400;
    line-height:25px;
    cursor:pointer

`
cancel.addEventListener('click', _ => {
    document.body.removeChild(box);
})

setTimeout(function () {
    document.body.appendChild(box);
}, 5000);

//==================================
// ASSIGNMENT 3

// let div = document.querySelector("div");

// function countdown() {
// div.innerHTML--;
//     if (div.innerHTML === "0") {
//         clearInterval(counter);
//     }
// }

// let counter = setInterval(countdown, 1000);

//test for me 
let p = document.querySelector("p");

function increment() {
    p.innerHTML++;
    if (p.innerHTML === "50") {
        clearInterval(counterP);
    }
}

let counterP = setInterval(increment, 1000);
//===============================================
// ASSIGNMENT 4

// let div = document.querySelector("div");

// function countdown() {
// div.innerHTML--;
//     if (div.innerHTML === "0") {
//          window.open("https://elzero.org", "_self", "width=400,height=400,left=200,top=10");
//     }
// }

// let counter = setInterval(countdown, 1000);
//=========================================
// ASSIGNMENT 4

let div = document.querySelector("div");

function countdown() {
div.innerHTML--;
    if (div.innerHTML === "5") {
        clearInterval(counter);
        window.open("https://elzero.org", "_blank", "width=400,height=400,left=200,top=10");
    }
}

let counter = setInterval(countdown, 1000);