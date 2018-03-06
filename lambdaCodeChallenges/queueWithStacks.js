// Write a stack class. Once you're done, implement a queue using two stacks.

// Here's how you can check if your code works:

// const queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// const val1 = queue.dequeue();
// const val2 = queue.dequeue();
// const val3 = queue.dequeue();
// console.log(val1, val2, val3);

class Stack {
  constructor(storage, top) {
    this.storage = [];
    this.top = 0;
  }

  push(element) {
    this.storage[this.top++] = element;
  }

  pop() {
    return this.storage[--this.top];
  }

  size() {
    return this.storage.length;
  }
}

class Queue {
  constructor(storage, first, last) {
    this.storage = [];
    this.first = new Stack();
    this.last = new Stack();
  }

  enqueue(item) {
    this.first.push(item);
    return this.first;
  }

  dequeue() {
    if (this.last.length === 0) {
      const length = this.first.length;
      while (this.first.length) {
        this.last.push(this.first.pop());
      }
      return this.last.pop();
    }
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
const val1 = queue.dequeue();
const val2 = queue.dequeue();
const val3 = queue.dequeue();
console.log(val1, val2, val3);