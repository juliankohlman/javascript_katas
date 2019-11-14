/*
Write a function for reversing a linked list. ↴ Do it in place. ↴

Your function will have one input: the head of the list.

Your function should return the new head of the list.

Here's a sample linked list node class:
*/

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//* Recursive implementation
// reverseRecursiveList() {

// }

// ! Run through this by hand and write out the steps on whiteboard
// ? Bonus: This in-place ↴ reversal destroys the input linked list. What if we wanted to keep a copy of the original linked list? Write a function for reversing a linked list out-of-place.

function reverseList(headOfList) {
  // need to point each nodes next pointer to the previous node in place
  // create copy of head node
  let currentNode = headOfList;
  // create runner node prev
  let prevNode = null;
  // create temp variable to hold next pointer
  let nextNode = null;

  // loop over list until we reach it's end
  while (currentNode) {
    // copy pointer to next BEFORE we overwrite it (saving next pointer)
    nextNode = currentNode.next;

    // reverse the next pointer of current node (pointing current node to previous node)
    currentNode.next = prevNode;

    // move forward in list
    prevNode = currentNode;
    currentNode = nextNode;
  }
  // return new head of list
  return prevNode;
}

let short = valuesToLinkedListNodes([1, 2]);
let single = new LinkedListNode(1);
let long = valuesToLinkedListNodes([1, 2, 3, 4, 5, 6]);

// console.log(reverseList(short));
// console.log(reverseList(single));
// console.log(reverseList(long));
reverseList(long);
// console.log(reverseList(null));

//* Helper function to build list from array of node values
function valuesToLinkedListNodes(values) {
  const nodes = [];
  for (let i = 0; i < values.length; i++) {
    const node = new LinkedListNode(values[i]);
    if (i > 0) {
      nodes[i - 1].next = node;
    }
    nodes.push(node);
  }
  return nodes;
}
