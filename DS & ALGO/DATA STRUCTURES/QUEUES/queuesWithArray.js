let queue = [];
queue.unshift(1);
queue.unshift(2);
queue.unshift(3);
console.log(queue);
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
// unshift will cause re index :( also if i use push and shift
// unlike stack array here is not the best practice
