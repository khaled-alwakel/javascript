// pass by value 
let x = 5;
let y = x; // take copy of x and store it in y 
// x y has diffrent adress
// also they pass by value as a parameters in declaring function
console.log(y);


// example of passing by refrence
let obj1 ={
    firstName : "khaled"
}
let obj2 = obj1; // point at the same adress so if i change the copy it will also change the original object because it pass by refrence 
obj2.firstName = "salma";
console.log(obj2)


// pass by value [primitive value ]
// pass by reference [objects array etc symbol[es6]]