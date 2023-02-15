//*================ASSIGNMENTS  86 => 93 ================//

// *ASSIGNMENT 1 
document.getElementById("elzero");
document.getElementsByName("js")

document.getElementsByTagName("div");
document.getElementsByTagName("div")[0];

document.getElementsByClassName("element")
document.getElementsByClassName("div.element")
document.getElementsByClassName(".element")

document.querySelector(".element");
document.querySelector("div");
document.querySelector("div.element")
document.querySelector("#elzero")

document.querySelectorAll(".element")
document.querySelectorAll("div")
document.querySelectorAll("div.element")
document.querySelectorAll("#elzero")
//--------------------------------------

// // *ASSIGNMENT 2
// let pictures = document.querySelectorAll("img");
// for (let i = 0; i < pictures.length; i++){
//     pictures[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     pictures[i].alt = "Elzero Logo";
    
// }
// console.log(pictures.length);
//---------------------------
// *ASSIGNMENT 3

let dollarInput = document.querySelector("input");
let result = document.querySelector(".result");

dollarInput.addEventListener("input",() => {
    if (dollarInput.value !== "" && dollarInput.value > 0) {
        let Pound = dollarInput.value * 15.6;
        result.textContent = `{${dollarInput.value}} USD Dollar = {${Pound.toFixed(2)}} Egyptian Pound`;
    }
});

dollarInput.style.cssText = `
font-weight:bold;
border:1px solid #222;
height:43px;
border-radius:5px;
padding-left:5px;
`;
result.style.cssText = `margin-top:10px;
font-family:courier,serif;
font-size:1.2rem;
color:navy
`

//---------------------------
// *ASSIGNMENT 4
let divOne = document.querySelector(".one")
let divTwo = document.querySelector(".two")

divOne.setAttribute("title", "one");
divOne.textContent = "one"

divTwo.setAttribute("title", "Two");
divTwo.textContent="Two 2"

//=//---------------------------
// *ASSIGNMENT 5

let pictures = document.querySelectorAll("img")
for (let i = 0; i < pictures.length; i++){
    if (pictures[i].hasAttribute("alt")) {
        pictures[i].setAttribute("alt","Old")
    } else{
        pictures[i].setAttribute("alt","Elzero New")
    }
}

//=//---------------------------
// *ASSIGNMENT 6

let create = document.querySelector("[name='create']");

// result.removeChild(myElement)
create.addEventListener("click", function (event) {

    let count = document.querySelector("[name='elements']");
    let text = document.querySelector("[name='texts']");
    let type = document.querySelector("select");
    let result = document.querySelector(".results");

    if (result.hasChildNodes()) {
        result.innerHTML=""
    }
    for (let i = 0; i < count.value; i++){
      
        let myElement = document.createElement(type.value);
        let myText = document.createTextNode(text.value);
        result.appendChild(myElement);
        myElement.appendChild(myText);
        myElement.setAttribute("class", "box");
        let idNumber = `id-${i}`;
        myElement.setAttribute("id", idNumber);
        myElement.style=
        `
            background-color:orange;
            color:#fff;
            border:2px solid #111;
            text-align:center;
            width:300px;
            height:50px;
            line-height:50px;
            margin:50px auto;
            font-weight:bold;
            text-transform:capitalize;
            font-family:courier,serif;
        `
    }
    event.preventDefault();
})
