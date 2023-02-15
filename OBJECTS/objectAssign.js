/*
  Object
  - Create Object With Assign Method
*/

let obj1 = {
    prop1: 1,
    meth1: function () {
      return this.prop1;
    },
  };
  
  let obj2 = {
    prop2: 2,
    meth2: function () {
      return this.prop2;
    },
  };
  
  let targetObject = {
    prop1: 100, // if there is duplicated property he will choose first one
    prop3: 3,
  };
  
  let finalObject = Object.assign(targetObject, obj1, obj2);
  
  finalObject.prop1 = 200; // change existed property
  finalObject.prop4 = 4; // create new property
  
console.log(finalObject);
//------------------------------
  
let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });
  
console.log(newObject);
 
console.log(Object.assign({}, obj1, { prop5: 5, prop6: 6 }));