/*
  - Set Data Type
  *Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  * Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/ 
//* ADD ELEMENTS

let myData = [1, 1, 1, 2, 3, "A"];
//* let myUniqueData = new Set([1, 1, 1, 2, 3]); //=> add element by element from old array  
let myUniqueData = new Set(myData);  //=> add by giving set the old array name

// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);    //*=> add manually with .add
// let myUniqueData = new Set();  //=> make empty set and then store with .add
// myUniqueData.add(1).add(1).add(1);
// myUniqueData.add(2).add(3).add("A");
// console.log(myUniqueData)

//* SIZE PROPERTY
//* console.log(myUniqueData.size)// like length in array
           
          
//* HAS METHOD 
//* console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

// console.log(myData);
// console.log(myUniqueData);

// console.log(myUniqueData.size);

// console.log(myData[0]);
// console.log(myUniqueData[0]);

//* DELETE ELEMENTS
myUniqueData.delete(1);
console.log(myUniqueData.delete(1)); //TRUE because it is in array 

console.log(myUniqueData);


//* CLEAR
//* myUniqueData.clear()

//* REMOVE DUPLICATE WITH FILTER NOT USING SET 
let x = myData.filter(function (ele,index) {
    return  myData.indexOf(ele) === index;
});
console.log(x);
