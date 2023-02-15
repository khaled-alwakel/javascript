//==================CHALLENGE 4============================

// let para = document.querySelector("p");
// document.body.removeChild(para);

// let myDiv = document.querySelector(".our-element");

// let before = document.createElement("div");
// before.setAttribute("class", "start");
// before.setAttribute("title", "Start Element");
// before.setAttribute("data-value", "Start");
// myDiv.before(before);

// let after = document.createElement("div");
// after.setAttribute("class", "end");
// after.setAttribute("title", "End Element");
// after.setAttribute("data-value", "End");
// myDiv.after(after);

//==================CHALLENGE 5============================
// let myDiv = document.querySelector("div");
// console.log(myDiv.children[0].nextSibling.nextSibling.nextSibling); // Elzero

//==================CHALLENGE 6============================
document.addEventListener("click", function (e) {
    
      console.log(`This Is ${e.target.tagName}`); 
  
  });