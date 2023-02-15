/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties3
  --- size
*/

let myMap = new Map([
    [10, "Number"],
    ["Name", "String"],
    [false, "Boolean"],
    ["javaScript", "string"]
  ]);
  

  // myMap.set(10, "Number");
  // myMap.set("Name", "String");
  
  console.log(myMap);
  //* get value of keys 
  console.log(myMap.get(10));
  console.log(myMap.get("Name"));
  console.log(myMap.get(false));
  
  console.log("#".repeat(10));
  //*HAS
  console.log(myMap.has("Name"));
  
  console.log("#".repeat(10));
  //* SIZE
  console.log(myMap.size);
  //* DELETE
  console.log(myMap.delete("Name"));
  
  console.log(myMap.size);
  //* CLEAR
  myMap.clear();
  
  console.log(myMap.size);