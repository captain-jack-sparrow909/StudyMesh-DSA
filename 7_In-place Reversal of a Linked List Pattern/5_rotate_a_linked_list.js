// Rotate a LinkedList: Given the head of a Singly LinkedList and a number ‘k’, rotate the LinkedList to the right by ‘k’ nodes.

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 10^9

// solution: 
// To rotate a linked list to the right by k nodes:

// 1 → 2 → 3 → 4 → 5
// k = 2

// Result: 4 → 5 → 1 → 2 → 3

function rotateRight(head, k) {
    if (head === null || head.next === null || k === 0) {
      return head;
    }
  
    // Find the length and the last node
    let length = 1;
    let lastNode = head;
  
    while (lastNode.next !== null) {
      lastNode = lastNode.next;
      length++;
    }
  
    // Avoid unnecessary full rotations
    k = k % length;
  
    if (k === 0) {
      return head;
    }
  
    // Connect the last node to the head to form a circle
    lastNode.next = head;
  
    // Find the new last node
    const stepsToNewLast = length - k;
  
    let newLast = head;
  
    for (let i = 1; i < stepsToNewLast; i++) {   //since it's refering to LinkedList position, that's why it's started from 1
      newLast = newLast.next;
    }
  
    const newHead = newLast.next;
  
    // Break the circle
    newLast.next = null;
  
    return newHead;
}


// Step-by-step example
// rotateRight([1, 2, 3, 4, 5], 2);

// Conceptually, the linked list is:

// 1 → 2 → 3 → 4 → 5 → null
// 1. Find the length

// Traverse the list:

// length = 5
// lastNode = 5
// 2. Reduce k
// k = k % length;

// Here:

// k = 2 % 5 = 2

// This matters because rotating by the full list length changes nothing.

// For example:

// k = 7
// length = 5

// 7 % 5 = 2

// Rotating by 7 is the same as rotating by 2.

// 3. Make the list circular
// lastNode.next = head;

// Now:

// 1 → 2 → 3 → 4 → 5
// ↑                   ↓
// └───────────────────┘
// 4. Find the new last node

// We are moving the last k = 2 nodes to the front:

// Moved to front: 4 → 5
// Remaining:      1 → 2 → 3

// The new last node should be 3.

// Its position is:

// stepsToNewLast = length - k;
// 5 - 2 = 3

// So the new last node is at position 3.

// The loop starts at position 1, where newLast = head:

// Start: newLast = 1

// Then:

// i = 1 → move to 2
// i = 2 → move to 3

// Now:

// newLast = 3
// 5. Find the new head
// const newHead = newLast.next;

// Since:

// newLast = 3

// then:

// newHead = 4
// 6. Break the circle
// newLast.next = null;

// This changes:

// 3 → 4

// into:

// 3 → null

// Final list:

// 4 → 5 → 1 → 2 → 3 → null
// Why length - k?

// For a list of length 5 and k = 2:

// 1 → 2 → 3 → 4 → 5

// The last 2 nodes move to the front:

// 4 → 5

// That means the first:

// length - k = 5 - 2 = 3

// nodes remain before the split:

// 1 → 2 → 3

// So node 3 becomes the new last node.





// why i started from 1 in:   for (let i = 1; i < stepsToNewLast; i++) {
//     newLast = newLast.next;
//   }

// and why was this needed: 
//   // Break the circle
//   newLast.next = null;

// The two lines are about position counting and ending the linked list correctly.

// Why does i start from 1?
// let newLast = head;

// for (let i = 1; i < stepsToNewLast; i++) {
//   newLast = newLast.next;
// }

// Before the loop starts, newLast already points to the node at position 1:

// 1 → 2 → 3 → 4 → 5
// ↑
// newLast

// So i starts at 1 because we are already at position 1.

// For:

// length = 5
// k = 2
// stepsToNewLast = 5 - 2 = 3

// We need newLast to reach position 3.

// Start: newLast = node 1, position 1

// i = 1 → move to node 2
// i = 2 → move to node 3
// i = 3 → condition 3 < 3 is false, stop

// Now:

// newLast = node 3

// You could also start from 0, but the loop would need a different condition:

// let newLast = head;

// for (let i = 0; i < stepsToNewLast - 1; i++) {
//   newLast = newLast.next;
// }

// Both versions move stepsToNewLast - 1 times.

// Why is newLast.next = null needed?

// Earlier, we made the linked list circular:

// lastNode.next = head;

// Before:

// 1 → 2 → 3 → 4 → 5 → null

// After:

// 1 → 2 → 3 → 4 → 5
// ↑                   ↓
// └───────────────────┘

// For rotation by 2:

// newLast = 3
// newHead = 4

// But the list is still circular:

// 4 → 5 → 1 → 2 → 3 → 4 → 5 → ...

// There is no null, so traversal would continue forever.

// This line:

// newLast.next = null;

// changes:

// 3 → 4

// into:

// 3 → null

// Now the final list is:

// 4 → 5 → 1 → 2 → 3 → null

// So:

// const newHead = newLast.next; // Save node 4 first
// newLast.next = null;          // Cut the link from 3 to 4

// The order matters. If you set newLast.next = null first, you would lose the reference to the new head.
