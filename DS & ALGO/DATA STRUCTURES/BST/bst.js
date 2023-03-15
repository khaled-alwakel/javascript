class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insertNode(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root; // to keep tracking every node
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left; // do check in current node
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  findNode(value) {
    if (this.root === null) return undefined;

    let current = this.root; // to keep tracking every node
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return current;
      }
    }
    return "Not Found !";
  }

  minNode() {
    let current = this.root;
    while (current.left) current = current.left;
    return current.value;
  }
  maxNode() {
    let current = this.root;
    while (current.right != null) current = current.right;
    return current.value;
  }
  removeNode(value) {
    const remove = (node, value) => {
      if (!node) return null;

      if (value == node.value) {
        if (!node.left && !node.right) return null;

        if (!node.left) return node.right;

        if (!node.right) return node.left;

        //node has left and right
        let temp = node.right;

        while (temp.left) temp = temp.left;

        node.value = temp.value;

        node.right = remove(node.right, temp.value);

        return node;
      } else if (value < node.value) {
        node.left = remove(node.left, value);
        return node;
      } else {
        node.right = remove(node.right, value);
        return node;
      }
    };
    this.root = remove(this.root, value);
  }

  BFS() {
    let queuedNodes = [this.root];
    let visitedNodes = [];
    let shiftedNode; // instead of repeating declaring every time in while loop
    while (queuedNodes.length) {
      shiftedNode = queuedNodes.shift();
      visitedNodes.push(shiftedNode.value);
      if (shiftedNode.left) queuedNodes.push(shiftedNode.left);
      if (shiftedNode.right) queuedNodes.push(shiftedNode.right);
    }
    return visitedNodes;
  }
  // push visited nodes first
  DFSPreOrder() {
    let visitedNodes = [];
    let current = this.root;

    function traverse(node) {
      visitedNodes.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current); // invoke
    return visitedNodes;
  }
  // push the visited nodes after
  DFSPostOrder() {
    let visitedNodes = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visitedNodes.push(node.value);
    }
    traverse(current); // invoke
    return visitedNodes;
  }
  DFSInOrder() {
    let visitedNodes = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      visitedNodes.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current); // invoke
    return visitedNodes;
  }
}
const bst = new BinarySearchTree();

bst.insertNode(10);
bst.insertNode(6);
bst.insertNode(15);
bst.insertNode(3);
bst.insertNode(8);
bst.insertNode(13);
bst.insertNode(20);
bst.insertNode(19);

bst.removeNode(15);
console.log(bst);
