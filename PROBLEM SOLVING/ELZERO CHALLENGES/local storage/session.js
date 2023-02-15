//* ASSIGNMENT 111 => 114
// *ASSIGNMENT 2
let nameInput = document.querySelector(".name");
let genderInput = document.querySelector(".gender");
let ageInput = document.querySelector(".age");
let selectInput = document.querySelector(".select");



// if there is old choices
if (window.sessionStorage.getItem("userName")) {
    nameInput.value = window.sessionStorage.getItem("userName")
}
if (window.sessionStorage.getItem("userGender")) {
    nameInput.value = window.sessionStorage.getItem("userGender")
}
if (window.sessionStorage.getItem("userAge")) {
    nameInput.value = window.sessionStorage.getItem("userAge")
}
if (window.sessionStorage.getItem("userSelect")) {
    nameInput.value = window.sessionStorage.getItem("userSelect")
}



nameInput.addEventListener('input', _ =>  {
   console.log(nameInput)
    // window.sessionStorage.setItem("userName", nameInput.value);
})
genderInput.addEventListener('input', _ =>  {
  
    // window.sessionStorage.setItem("userGender",  genderInput.value);
})
ageInput.addEventListener('input', _ =>  {

    // window.sessionStorage.setItem("userAge", ageInput.value);
    console.log(ageInput)
})
selectInput.addEventListener('input', _ =>  {
    
    // window.sessionStorage.setItem("userSelect", selectInput.value);
    console.log(selectInput)
})

document.forms[0].onsubmit(function (e) {
    e.preventDefault();
})