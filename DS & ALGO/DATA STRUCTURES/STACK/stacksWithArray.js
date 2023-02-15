// ? STACK follow lifo principle

/**==========stack implementation  with Array==========**/

let stackWithArray = [];

stackWithArray.push("Alpha");
stackWithArray.push("Beta");
stackWithArray.push("Gamma");

console.log(stackWithArray);
console.log(stackWithArray.pop());
console.log(stackWithArray.pop());
console.log(stackWithArray.pop());
console.log(stackWithArray);

/*============ stack implementation  with Class ===============**/

class Stack {
  #items;
  constructor() {
    this.#items = [];
  }
  push(obj) {
    this.#items.push(obj);
  }
  pop() {
    if (this.#items.length === 0) throw new Error("stack is empty!");
    this.#items.pop();
  }
  peek() {
    if (this.#items.length === 0) throw new Error("stack is empty!");
    return this.#items[this.#items.length - 1];
  }

  print() {
    if (this.#items.length === 0) throw new Error("stack is empty!");
    return this.#items;
  }

  get count() {
    return this.#items.length;
  }
}
const stack = new Stack();

stack.push({
  name: "Alice",
  age: 44,
  city: "Alexandria",
});
console.log(stack);
stack.push({
  name: "Bob",
  age: 25,
  city: "Cairo",
});
console.log(stack);
stack.push({
  name: "Charlie",
  age: 27,
  city: "Tanta",
});

stack.pop();
console.log(stack.peek());
console.log(stack.print());
console.log(stack.count);
