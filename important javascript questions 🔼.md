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

<div align="right">

<b><a href="#">↥ back to top</a></b>

</div>

## What does the && operator do ?

The `&&` or **Logical AND** operator finds the first _falsy_ expression in it’s operands and returns it and if it does not find any _falsy_ expression it returns the last expression

It make short circuting to prevent the unnecassary work 

```js
console.log(true && 44 && false && true ) // false
console.log(true && 44 && 'last item') // 'last item'

```
<div align="right">

<b><a href="#">↥ back to top</a></b>

</div>
## What does the || operator do ?

The `||` or **Logical OR** operator finds the first _truthy_ expression in its operands and returns it. This too employs short-circuiting to prevent unnecessary work.

```js
console.log(false || 44 || false || true ) // 44
console.log(true || 'last item') // true

```

<div align="right">

<b><a href="#">↥ back to top</a></b>

</div>

## What is the different between == and ===

==  or `abstract equality ` operator It compares values  after ` coercion `
_coercion_ is the process of converting a value  to another type. It happend automatically by js 
Engine for the sake of comparison 

And the === `strict equality ` compares by value and type `without coercion`

```js
console.log(4 == 4) // true
console.log(4 == '4') // true
console.log(4 =='3') // false 

console.log(2 === "2") // false
console.log(2 === 2) // true
```

<div align="right">

<b><a href="#">↥ back to top</a></b>

</div>
##  Why does it return **false** when comparing two similar objects in JavaScript?

Look at the example below.  

```
let car1 = { name: 'bmw' };
let car2 = { name : 'bmw' };
let car3 = car1 ;

console.log(car1 === car2); // false
console.log(car1 === car3); // true 
```

**JavaScript** compares _objects_ and _primitives_ differently.
In _primitives_ it compares them by **value**
while in _objects_ it compares them by **reference**

or the **address in memory heap  where the objects are  stored**. 

Ps: it’s not pure REFERENCE because it’s actually store address in memory stack  with a value and that value points to a place in memory heap 

That's why the first `console.log` statement returns `false` and the second `console.log` statement returns `true`. `car1` and `car3` have the same reference and `car1` and `car2` are not.

<div align="right">

<b><a href="#">↥ back to top</a></b>

</div>

Happy coding, see you later 😀

