class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function deleteNode(nodeToDelete) {
  // Delete the input node from the linked list (0(1) time and space)
  // in-place operation
  // Gotchas / Caveats
  // Will not work for deleting last node in list
  // Side-effects
  // Any references to the 'deleted' node have been reassigned
  // Any other pointers/refs to the original 'deleted' nodes next now
  // point to 'dangling' or unreachable by walking down the list (head -> tail ->null)
  nodeToDelete.value = nodeToDelete.next.value;
  nodeToDelete.next = nodeToDelete.next.next;
  return nodeToDelete;
}
// * Changing the list in-place may cause side-effects which should be weighted against the benefits of the time and space savings both are O(1)
