```toc
```
## What is the different between null and undefined ?

Before understanding the differences between them we must understand the 

👉 similarities 

- Both are primitive data types.
- They are **falsy** values. Values that evaluated to false when converting it to boolean using `Boolean(value)`

```js 
console.log(Boolean(null)); // false
console.log(Boolean(undefined)) // false
```

👉 Differences 

-  `undefined` is the default value of 
	- variable that has not been assigned a specific value.
	- function that has no **explicit** return value 
	- property that does not exist in an object
```js
  let undefinedValue;
  const doNothing = () => {};
  const myLaptop = {
    company:'HP',
    price:8000
  };

  console.log(undefinedValue); // undefined
  console.log(doNothing()); // undefined
  console.log(myLaptop.color); // undefined
```

- `null` is **"a value that represents no value"**.
- Logically, a null value is an empty object pointer, which is why typeof returns “object” when it’s passed a null value in the following example:
```js
let car = null;
console.log(typeof car); // "object"
```


👉  comparison `null` and `undefined`

```js
console.log(null == undefined) // true
```

The value undefined is a derivative of Null, Keep in mind that his operator == converts its operands for comparison purposes 
 
```js
console.log(null === undefined) // false
```
 
Because  as i mentioned before type of  `null` is an object, while the type of `undefined` is undefined 

```js
console.log(typeof undefined); // undefined
console.log(typeof null); // object
```
👉 usage 

Even though null and undefined are related, they have very different uses.

you should never explicitly set the value of a variable to undefined

but the same does not hold true for null, Any time an object is expected but is not available, `null` should be used in its place. This helps to keep the paradigm of null as an empty object pointer and further differentiates it from undefined

That way, you can explicitly check for the value null to determine if the variable has been filled with an object reference at a later time, such as in this example: 
  
  ```js
if (car != null) {  // do something with car}
```

Happy coding, see you later 😀

