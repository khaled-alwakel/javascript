// priority queues   we will deal with min heap

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const node = this.values[idx];
    while (idx > 0) {
      let parentIndex = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIndex];
      if (node.priority >= parent.priority) break;
      this.values[parentIndex] = node;
      this.values[idx] = parent;
      idx = parentIndex;
    }
    return this.values;
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const node = this.values[idx];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      // make sure that child is in bound [and see which one will be swapped with element  ]
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < node.priority) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap == null && rightChild.priority < node.priority) ||
          (swap != null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = node;
      // update the new index of element
      idx = swap;
    }
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

const ER = new PriorityQueue();
ER.enqueue("heart attack", 1);
ER.enqueue("broken leg", 3);
ER.enqueue("cold", 9);
ER.enqueue("check up", 10);
console.log(ER);
console.log(ER.dequeue());
console.log(ER);
