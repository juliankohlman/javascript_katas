/**
 *A queue is an abstract data type that maintains the order in which elements were added to it, allowing the oldest elements to be removed from the front and new elements to be added to the rear. This is called a First-In-First-Out (FIFO) data structure because the first element added to the queue (i.e., the one that has been waiting the longest) is always the first one to be removed.

A basic queue has the following operations:

Enqueue: add a new element to the end of the queue.
Dequeue: remove the element from the front of the queue and return it.
In this challenge, you must first implement a queue using two stacks. Then process  queries, where each query is one of the following  types:

1 x: Enqueue element  into the end of the queue.
2: Dequeue the element at the front of the queue.
3: Print the element at the front of the queue.

Function Description

Complete the put, pop, and peek methods in the editor below. They must perform the actions as described above.

Input Format

The first line contains a single integer, q, the number of queries.

Each of the next q lines contains a single query in the form described in the problem statement above. All queries start with an integer denoting the query type, but only query 1 is followed by an additional space-separated value, x, denoting the value to be enqueued.

Output Format

For each query of type , return the value of the element at the front of the fifo queue on a new line.
 *
 */

function processData(input) {
	const data = input
		.split('\n')
		.slice(1)
		.map(i => i.split(' '));

	const lifo = [];
	const fifo = [];

	data.forEach(i => {
		if (i[0] === '1') {
			lifo.push(i[1]);
			fifo.push(i[1]);
		} else if (i[0] === '2') {
			lifo.pop();
			fifo.shift();
		} else {
			console.log(fifo[0]);
		}
	});
}
