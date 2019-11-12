class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
//! BONUS
// ? How would you detect the first node in the cycle? Define the first node of the cycle as the one closest to the head of the list.
//* Use a queue to add nodes as they are visited, once we reach a node with a next that has been visited return that value or node. Or call get if using a Set

// ? Would the program always work if the fast runner moves three steps every time the slow runner moves one step? Yes.

// ? What if instead of a simple linked list, you had a structure where each node could have several "next" nodes? This data structure is called a "directed graph." How would you test if your directed graph had a cycle?

//* Time O(n), space O(n) Not the best solution
function containsCycle(firstNode) {
  const visitedNodes = new Set();

  while (firstNode && firstNode.next) {
    // check visitedNode stack for this nodes next value
    if (visitedNodes.has(firstNode.next.value)) {
      return true;
    }
    // add current node value to set
    visitedNodes.add(firstNode.value);
    // move to next node
    firstNode = firstNode.next;
  }
  return false;
}

//* Time O(n), space O(1)
//* Stores constant number of nodes to get space down to O(1)
//? Difference between looping versus linear list?
// looping list will never end, whereas a linear list has an end node (Tail)
//* Create a trailing pointer
//* Have a fast "runner" move through the list
//* if they encounter the the slow "runner" before they reach the end of the list we have a cycle otherwise they will hit the end of the list
//* solution is an example of proof by contradiction
function containsCycle(firstNode) {
  let hasCycle = false;
  let slow = firstNode;
  let fast = firstNode;

  // advance fast 2 nodes every time slow advances 1 node
  // using fast pointer to control loop b/c it will reach end if it exists first
  while (fast && fast.next) {
    // advance your pointers
    slow = slow.next; // 1 step
    fast = fast.next.next; // 2 steps

    // fast is about to lap or pass slow...meaning we have a loop
    if (slow === fast) {
      hasCycle = true;
      break;
    }
  }

  return hasCycle;
}

// Tests
let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
assertEquals(containsCycle(nodes[0]), false, desc);

desc = "cycle loops to beginning";
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
nodes[3].next = nodes[0];
assertEquals(containsCycle(nodes[0]), true, desc);

desc = "cycle loops to middle";
nodes = valuesToLinkedListNodes([1, 2, 3, 4, 5]);
nodes[4].next = nodes[2];
assertEquals(containsCycle(nodes[0]), true, desc);

desc = "two node cycle at end";
nodes = valuesToLinkedListNodes([1, 2, 3, 4, 5]);
nodes[4].next = nodes[3];
assertEquals(containsCycle(nodes[0]), true, desc);

desc = "empty list";
assertEquals(containsCycle(null), false, desc);

desc = "one element linked list no cycle";
let firstNode = new LinkedListNode(1);
assertEquals(containsCycle(firstNode), false, desc);

desc = "one element linked list cycle";
firstNode = new LinkedListNode(1);
firstNode.next = firstNode;
assertEquals(containsCycle(firstNode), true, desc);

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

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
