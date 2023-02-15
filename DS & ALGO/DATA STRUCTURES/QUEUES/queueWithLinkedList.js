class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueueNode(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }
  dequeueNode() {
    if (!this.first) return undefined;
    let oldHead = this.first;
    this.first = oldHead.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return oldHead.value;
  }
}
let myQueue = new Queue();
myQueue.enqueueNode("first"); // first in
myQueue.enqueueNode("second");
myQueue.enqueueNode("third");
console.log(myQueue.dequeueNode());
