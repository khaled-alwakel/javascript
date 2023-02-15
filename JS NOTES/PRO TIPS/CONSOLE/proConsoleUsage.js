// Console.log Many Objects
let obj1 = {
    name: 'alice',
    age: 44
};
let obj2 = {
    name: 'bob',
    age: 43
};
let obj3 = {
    name: 'charlie',
    age: 34
};
console.log(`%c my friends`, 'color:orange; font-weight:bold') // browser only
console.log({ obj1, obj2, obj3 });
console.table([obj1, obj2, obj3]);

//=========

console.time('looper');
let i = 0;
while (i < 100) {
    console.log(i)
    i++
};
console.timeEnd('looper')
    // =======