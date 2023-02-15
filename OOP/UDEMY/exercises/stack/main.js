// stack   push pop

class Stack {
    #items // another solution with #
    constructor() {
        this.#items = []
      
    }
    push (obj) {
        // _items.get(this).push(obj);
       this.#items.push(obj)
    }
    pop() {
        // const items = _items.get(this)
        if (this.#items.length === 0) // if (items.length ===0)
            throw new Error('stack is empty!');
        this.#items.pop() // items.pop()
    }
    peek() {
        // const items = _items.get(this)
        if (this.#items.length === 0) // if (items.length ===0)
            throw new Error('stack is empty!');
        return this.#items[this.#items.length-1] // return items[items.length-1]
    }
  
    get count() {
        // return _items.get(this).length
        return this.#items.length
    }

}
const stack = new Stack();
console.log(stack)
stack.push(1);
stack.push(3);
stack.push(5);
stack.push(7);
stack.pop();
stack.pop();
// console.log(stack.peek())
console.log(stack.count)