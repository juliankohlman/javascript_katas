// Write a stack class. Once you're done, implement a queue using two stacks.
// Here's how you can check if your code works:
class Stack {
	constructor() {
		this.storage = [];
	}
	add(item) {
		this.storage.push(item);
	}
	remove() {
		return this.storage.pop();
	}
	get length() {
		return this.storage.length;
	}
}

class Queue {
	// instantiate two new stacks
	constructor() {
		this.stack1 = new Stack();
		this.stack2 = new Stack();
	}
	// mirrors add for stack
	enqueue(item) {
		this.stack1.add(item);
	}
	// check length of second stack
	dequeue() {
		if (this.stack2.length === 0) {
			// store length of second stack in variable
			const length = this.stack1.length;
			// iterate length amount of times until
			// stack 1 is empty.
			for (let i = 0; i < length; i++) {
				this.stack2.add(this.stack1.remove());
			}
		}
		// return the first item in the queue (first person in line)
		return this.stack2.remove();
	}
}

// Do not modify the following code:
const stack = new Stack();
console.log(stack.length); // <--- 0
stack.add('first');
stack.add('second');
stack.add('third');
console.log(stack.length); // <--- 3
console.log(stack.storage); // <--- [ 'first', 'second', 'third' ]
console.log('LIFO Stack:', stack.remove(), stack.remove(), stack.remove()); // <--- LIFO: third second first

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
const val1 = queue.dequeue();
const val2 = queue.dequeue();
const val3 = queue.dequeue();
console.log('FIFO Queue:', val1, val2, val3); // <--- FIFO: 1 2 3
