class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //* like unshift in linked list
  push(value) {
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size++;
    return this;
  }

  //* like shift in linked list
  pop() {
    if (!this.first) return undefined;
    let oldFirst = this.first;
    this.first = oldFirst.next;
    this.size--;
    if (this.size === 0) this.last = null;
    return oldFirst;
  }
}

let stack = new Stack();
stack.push(7);
stack.push(22);
stack.push(2);
stack.push(10); // last in
console.log(stack.pop());
