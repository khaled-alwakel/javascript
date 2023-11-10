//console.log('👉️ Working With Arrays')
//
//const myArr = [100, 200, 300, 400];
//
//for (const iterator of myArr.entries()) {
//  console.log(iterator);
//}
//for (const [key, value] of myArr.entries()){
//    console.log(key, value)
//}
//
//for (const key in myArr){
//    console.log(key)
//}
//myArr.forEach((ele, i )=>{
//    console.log(`element ${i+1} is ${ele}`)
//})
//console.log(new Map (myArr.entries()))
//
/**========================== */
console.log('👉️ Working With Objects');

const myObj = {
 name: "alice",
 age: 44,
 adress: 'cairo'
};

for (const key in myObj){
    console.log(key)
}

for (const key of Object.keys(myObj)) {
  console.log(`key: ${key}`);
}

for (const value of Object.values(myObj)) {
  console.log(`value : ${value}`);
}

for (const [key, value] of Object.entries(myObj)) {
  console.log(`my ${key} is ${value}`);
}


console.log(new Map (Object.entries(myObj)))

/**========================== */
//console.log('👉️ Working With Maps');
//const myMap = new Map([
//  ["name", "alice"],
//  ["age", 44],
//]);
//
//for (const iterator of myMap) {
//  console.log(iterator);
//}
//
//for (const [key, value] of myMap){
//    console.log(key, value)
//}


//======================
