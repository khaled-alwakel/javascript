// piece of data - val
//reference to next node - next
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  pushNode(value) {
    let newNode = new Node(value);
    if (!this.head) {
      // make head and tail point at the same node. [they will inherit all things from it value and next ]
      this.head = newNode;
      this.tail = this.head;
    } else {
      //* we don't traverse the whole list as long as we keeping track of the last item in the last . and said take that last item point it over  to that new last item. and now the tail was updated to be at the very end :)
      this.tail.next = newNode; // like alice.next = bob
      this.tail = newNode;

    }
    this.length++; // update the length

    return this; // return the new node pushed
  }
  popNode() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      // console.log(newTail.val)
      current = current.next;
      //console.log(current.val)
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      // or if head == tail
      this.head = null;
      this.tail = null;
    }
    return current; // return the   popped node
  }
  shiftNode() {
    if (!this.head) return undefined;
    let oldHead = this.head; // we need to save it to variable coz we wanna to return it
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }
  unShiftNode(value) {
    let newHead = new Node(value);
    if (!this.head) {
      this.head = newHead;
      this.tail = this.head; // or this.tail = newNode
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.length++;
    return this;
  }
  getNode(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let counter = 0;
    while (index !== counter) {
      current = current.next;
      counter++;
    }
    return current;
  }
  findNode(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return `Not Found`;
  }

  setNode(value, index) {
    let current = this.getNode(index);
    if (current) {
      current.val = value;
      return ` value has been changed`;
    } else return `Invalid Node`;
  }

  insertNode(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unShiftNode(value); //!! bang bang to make the return is boolean instead of returning the whole list in case of unshift || push
    if (index === this.length) {
      this.push(value);
      return ` "node has been inserted at the end successfully"`; //* or i can do this instead of !!
    }
    let insertedNode = new Node(value);
    let previousNode = this.getNode(index - 1);
    let newPlace = previousNode.next; // like newPlace = previousNode.next
    insertedNode.next = newPlace;
    previousNode.next = insertedNode;
    this.length++;
    return true;
  }
  removeNode(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let previousNode = this.getNode(index - 1);
    let nodeToDelete = this.getNode(index); // = previousNode.next
    previousNode.next = nodeToDelete.next; // previousNode.next = previousNode.next.next
    this.length--;
    return nodeToDelete;
  }
  reverseList() {
    // swap head and tail
    let traversal = this.head;
    this.head = this.tail;
    this.tail = traversal;
    let previousTraversal = null;
    let nextTraversal = null;
    // loop over list and make current.next = this.tail //* while(traversal != null  )
    for (let i = 0; i < this.length; i++) {
      nextTraversal = traversal.next;
      traversal.next = previousTraversal;
      previousTraversal = traversal; // shift previousTraversal
      traversal = nextTraversal; // shift traversal
    }
    return this;
  }
  printList() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}
let list = new SinglyLinkedList();
console.log(list.pushNode(100));
console.log(list.pushNode(200));
// console.log(list.pushNode(300));
// console.log(list.pushNode(400));
// console.log(list.pushNode(500));

// console.log(list.shiftNode());
// console.log(list.findNode(300));

// console.log(list);


function* name(params) {
  if params === 'o' return 'hi'
}