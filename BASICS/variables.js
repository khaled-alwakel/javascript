var userName= "Alice"; // camel case 
var age = 34;

console.log(userName);
console.log(age);
console.log(hello);

hello.innerHTML= "option" ;
/*
* var [ i can access it in any place of program]
    --redeclare(yes)
    --access before declare(undefined) =>hard to find error
    --variable scope drama [added to window] (yes)
    --block or function scope()

* let ecs6 [ access only in it's scope]
    --redeclare(no => error)
    --access before declare(error) => easy to find error
    --variable scope drama [added to window] (no)
    --block or function scope()  

* const ecs6 [ access only in it's scope]
    --redeclare(no => error)
    --access before declare(error)
    --variable scope drama [added to window] (no)
    --block or function scope()

*/

/**
 * string syntax + character escape sequences
 * \escape +line continue
 * \n
 */
console.log('Elzero web "school"'); // must be double in single ok
console.log("Elzero web 'school'"); // must be single in double ok 
console.log("Elzero web \"school\""); // escape => it will printed like it typed
console.log('Elzero\ web \'school\'');  // escape => it will printed like it typed

console.log("Elzero\nweb\nschool");

//--------------- concatenation--------//

let ab = "we love";
let cd = "javascript";
document.write(ab + " " + cd);

//---------- template literals (template strings)
//old way
let a = "we love";
let b = "javascript"; 
let c = "and ";
let d = "programming";
console.log(a + " " + b +
    "\n" + c + " " + d);

// ecmascript for template string  here there is no escaping
console.log(`${a} ${b} "" 
 ${c} ${d}`);


 // notice here 
let title = "elzero";
let desc = "elzero web school";
let markup = `
    <div class="card">
        <div class="child">
            <h2>${title}</h2>
            <p>${desc}</p>
        </div>
    </div>
`;
document.write(markup);

