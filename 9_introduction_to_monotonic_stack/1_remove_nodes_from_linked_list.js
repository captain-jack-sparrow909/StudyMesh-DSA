// Remove Nodes From Linked List: Given the head node of a singly linked list, modify the list such that any node that has a node with a greater value to its right gets removed. The function should return the head of the modified list.

// Examples:

// Input: 5 -> 3 -> 7 -> 4 -> 2 -> 1
// Output: 7 -> 4 -> 2 -> 1
// Explanation: 5 and 3 are removed as they have nodes with larger values to their right.

// solution:
// A simple approach is:

// Reverse the linked list.
// Traverse from left to right while keeping the greatest value seen.
// Remove nodes smaller than that greatest value.
// Reverse the list again.

// We reverse because nodes originally on the right will then appear before the current node.

function removeNodes(head) {
    if (head === null || head.next === null) {
      return head;
    }
  
    // Step 1: Reverse the list
    head = reverseList(head);
  
    let current = head;
    let maxValue = current.val;
  
    // Step 2: Remove nodes smaller than the maximum seen
    while (current !== null && current.next !== null) {
      if (current.next.val < maxValue) {
        // Remove current.next
        current.next = current.next.next;
      } else {
        current = current.next;
        maxValue = current.val;
      }
    }
  
    // Step 3: Restore the original direction
    return reverseList(head);
  }
  
  function reverseList(head) {
    let previous = null;
    let current = head;
  
    while (current !== null) {
      const nextNode = current.next;
  
      current.next = previous;
      previous = current;
      current = nextNode;
    }
  
    return previous;
}


// Step-by-step example
// Original:

// 5 → 3 → 7 → 4 → 2 → 1
// 1. Reverse the list
// 1 → 2 → 4 → 7 → 3 → 5

// Now, while moving left to right, every node we already visited was originally on the node’s right side.

// Start with:

// maxValue = 1
// current = 1
// Check node 2
// 2 < 1 → false

// Keep 2 and update:

// maxValue = 2

// List remains:

// 1 → 2 → 4 → 7 → 3 → 5
// Check node 4
// 4 < 2 → false

// Keep 4:

// maxValue = 4
// Check node 7
// 7 < 4 → false

// Keep 7:

// maxValue = 7
// Check node 3
// 3 < 7 → true

// Remove 3:

// current.next = current.next.next;

// Before:

// 7 → 3 → 5

// After:

// 7 → 5

// Notice that current stays at 7 because its new next node, 5, still needs to be checked.

// Check node 5
// 5 < 7 → true

// Remove 5.

// The reversed list is now:

// 1 → 2 → 4 → 7
// Reverse again
// 7 → 4 → 2 → 1

// That is the required result.

// Why do we compare current.next?

// We need access to the node before the node being removed:

// current.next = current.next.next;

// That lets us bypass the unwanted node.

// Why use < instead of <=?
// current.next.val < maxValue

// The problem removes a node only when there is a greater value to its right.

// Equal values are not greater, so duplicates should remain.

// For example:

// 5 → 5

// The first 5 should not be removed because the value to its right is equal, not greater.
