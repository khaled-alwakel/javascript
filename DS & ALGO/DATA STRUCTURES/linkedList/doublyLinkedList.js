// piece of data - val
//reference to next node - next
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      // or if this.length === 0
      // make head and tail point at the same node. [they will inherit all things from it value and next ]
      this.head = newNode;
      this.tail = this.head;
      console.log(this.head);
      console.log(this.tail);
    } else {
      //* we don't traverse the whole list as long as we keeping track of the last item in the list . and said take that last item point it over to that new node. and now the tail was updated to be at the very end :)
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++; // update the length
    return this; // return the new node pushed
  }
  popNode() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      // make it null coz it wont by any nodes
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev; // update current to be tail
      this.tail.next = null;
      poppedNode.prev = null;
      // return the   popped node
    }
    this.length--;

    return poppedNode;
  }
  shiftNode() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      // make it null coz it wont by any nodes
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      oldHead.next = null;
      this.head.prev = null;
    }
    this.length--;
    return oldHead;
  }
  unShiftNode(value) {
    let newHead = new Node(value);
    if (!this.head) {
      // or if this.length === 0
      this.head = newHead;
      this.tail = newHead;
    } else {
      //* we don't traverse the whole list as long as we keeping track of the last item in the list . and said take that last item point it over to that new node. and now the tail was updated to be at the very end :)
      // this.tail.next = newNode;
      newHead.next = this.head;
      this.head.prev = newHead;
      this.head = newHead;
    }
    this.length++; // update the length
    return this; // return the new node pushed
  }
  getNode(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let counter = 0;
    let middle = this.length / 2;
    if (index <= middle) {
      console.log(`search from the head`);
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      console.log(`search from the tail`);
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }
    return current;
  }
  setNode(value, index) {
    let current = this.getNode(index);
    if (current) {
      current.value = value;
      return ` value has been changed`;
    }
    return `Invalid Node`;
  }
  insertNode(value, index) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unShiftNode(value); //!! bang bang to make the return is boolean instead of returning the whole list in case of unshift || push
    if (index === this.length) {
      this.push(value);
      return ` "node has been inserted at the end successfully"`; //* or i can do this instead of !!
    }
    let insertedNode = new Node(value);
    let previousNode = this.getNode(index - 1);
    let newPlace = previousNode.next; // like newPlace = previousNode.next

    (previousNode.next = insertedNode), (insertedNode.prev = previousNode);

    (insertedNode.next = newPlace), (newPlace.prev = insertedNode);

    this.length++;
    return true;
  }
  removeNode(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shiftNode();
    if (index === this.length - 1) {
      this.popNode();
      return ` "node has been inserted at the end successfully"`; //* or i can do this instead of !!
    }
    let nodeToRemove = this.getNode(index);
    let beforeNodeToRemove = nodeToRemove.prev;
    let afterNodeToRemove = nodeToRemove.next;

    (beforeNodeToRemove.next = afterNodeToRemove),
      (afterNodeToRemove.prev = beforeNodeToRemove);

    (nodeToRemove.next = null), (nodeToRemove.prev = null);

    this.length--;
    return nodeToRemove;
  }
}

let doublyList = new doublyLinkedList();
doublyList.push("Harry");
doublyList.push("Ron");
doublyList.push("Bob");
doublyList.push("Alice");
doublyList.push("chaplin");

console.log(doublyList.removeNode(1));
