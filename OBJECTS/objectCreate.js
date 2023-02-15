/*
  Object
  - Create Object With Create Method
*/

let user = {
  age: 20,
  doubleAge: function () {
    return this.age * 2; // this is for the object who call the method  copyObj
    //[if user.age it will return 40 always ]
  },
};

console.log(user);
console.log(user.age);
console.log(user.doubleAge());

let obj = Object.create({}); // new one not prototype from any object

obj.a = 100;

console.log(obj);

let copyObj = Object.create(user); //The Object.create() method creates a new object using the prototype of the given object.

copyObj.age = 30; // 30 *2

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());
