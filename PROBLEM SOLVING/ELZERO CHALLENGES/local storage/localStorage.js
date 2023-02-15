//* ASSIGNMENT 111 => 114
// *ASSIGNMENT 1
let fontFamilySelect = document.querySelector(".fonts");
let colorSelect = document.querySelector(".colors");
let fontSizeSelect = document.querySelector(".size");
let testDiv = document.querySelector("div");

// if there is old choices
if (window.localStorage.getItem("fontFamily")) {
    testDiv.style.fontFamily = window.localStorage.getItem("fontFamily");
    fontFamilySelect.value = window.localStorage.getItem("fontFamily")
}
   
if (window.localStorage.getItem("color")) {
    testDiv.style.color = window.localStorage.getItem("color");
    colorSelect.value = window.localStorage.getItem("color");
}

if (window.localStorage.getItem("fontSize")) {
    testDiv.style.fontSize = window.localStorage.getItem("fontSize");
    fontSizeSelect.value = window.localStorage.getItem("fontSize");
}
   
// handel font family input
fontFamilySelect.addEventListener('input', _ => {
    window.localStorage.setItem("fontFamily", fontFamilySelect.value);
    testDiv.style.fontFamily = fontFamilySelect.value;
});

// handel color input
colorSelect.addEventListener('input', _ => {
    window.localStorage.setItem("color",  colorSelect.value);
    testDiv.style.color =  colorSelect.value;
});

// handel font size input
fontSizeSelect.addEventListener('input', _ => {
    window.localStorage.setItem("fontSize", fontSizeSelect.value);
    testDiv.style.fontSize =fontSizeSelect.value;
});
