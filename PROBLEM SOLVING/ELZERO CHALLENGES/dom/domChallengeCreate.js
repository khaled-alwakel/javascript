    /*
    *DOM challenge
    */

// header
let header = document.createElement("div");
header.className = "websiteHeader";
let logo = document.createElement("div");
logo.className =logo;
let logoText = document.createTextNode("Elzero");

let ul = document.createElement("ul");
ul.className = "menu";
let home = document.createElement("li");
let about = document.createElement("li");
let service = document.createElement("li");
let contact = document.createElement("li");
let homeText = document.createTextNode("Home");
let aboutText = document.createTextNode("About");
let serviceText = document.createTextNode("Service");
let contactText = document.createTextNode("Contact");


document.body.appendChild(header);
header.appendChild(logo);
logo.appendChild(logoText);

header.appendChild(ul);
ul.appendChild(home);
home.appendChild(homeText);
ul.appendChild(about);
about.appendChild(aboutText);
ul.appendChild(service);
service.appendChild(serviceText);
ul.appendChild(contact);
contact.appendChild(contactText);

document.body.style =
  
`   background-color:#fff;
    font-family: Helvetica, sans-serif;
    border:1px solid #555;
    padding:5px;
`
header.style.cssText = `
    padding:0 20px;
    height:40px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    background-color:#fff;
`
ul.style.cssText = `
    list-style-type:none;
    display:flex;
    gap:20px;
    font-weight:500;
    font-size:1.2rem;
`
logo.style.cssText = `
    font-size:1.5rem;
    color:#23a96e;
    font-weight:700;
`

// main
let productContainer = document.createElement("section");

for (let i = 0; i<15; i++){

    let product = document.createElement("div");
    let myHeading = document.createElement("h2");
    let myParagraph = document.createElement("p");
    
    let myHeadingText = document.createTextNode(`${i+1}`);
    let myParagraphText = document.createTextNode("product");
    
    product.className = "product";
    myHeading.className = "title"
    myParagraph.className = "desc";
    
    
    productContainer.appendChild(product);
    product.appendChild(myHeading);
    product.appendChild(myHeadingText);
    product.appendChild(myParagraph);
    myParagraph.appendChild(myParagraphText);
       
}

document.body.appendChild(productContainer);

productContainer.style.cssText = `
    display:flex;
    flex-wrap:wrap;
    background-color:#eaeaea;
    padding:10px
`
let products = document.querySelectorAll(".product");

let desc = document.querySelectorAll(".desc");


for(let j=0; j<products.length; j++){
    products[j].style.cssText =
        `
        background-color:#fff;
        text-align:center;
        width:32%;
        margin:10px auto;
        font-weight:800;
        text-transform:capitalize;
        font-family:courier,serif;
        font-size:1.3rem
    `;

    desc[j].style.cssText = `
        opacity:0.5;
        margin:10px;
        font-size:1rem
    `;
};

//footer
let footer = document.createElement("footer");
footer.className = "footer";
footerText = document.createTextNode("Copyright 2022");
footer.appendChild(footerText);
document.body.appendChild(footer);

footer.style.cssText = `
    text-align:center;
    background-color:#23a96e;
    color:#fff;
    padding:12px
`





