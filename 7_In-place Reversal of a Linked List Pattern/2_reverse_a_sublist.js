// Reverse a Sub-list: Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

// solution: 
// We reverse only the nodes between positions p and q.
// Assume positions start from 1.

function reverseSubList(head, p, q) {
    if (head === null || p === q) {
      return head;
    }
  
    let current = head;
    let previous = null;
  
    // Move to position p; we're starting from 1 b/c LinkedList positions start from 1
    for (let i = 1; i < p; i++) {
      previous = current;
      current = current.next;
    }
  
    const nodeBeforeSubList = previous;
    const firstNodeOfSubList = current;
  
    // Reverse nodes from p to q
    let nextNode = null;
  
    for (let i = 0; i < q - p + 1; i++) {  //here we're starting from zero, as this loop is not tracking linked-list positions. It is counting how many nodes have been reversed.
      nextNode = current.next;
      current.next = previous;
      previous = current;
      current = nextNode;
    }
  
    // Connect the first part to the reversed part
    if (nodeBeforeSubList !== null) {
      nodeBeforeSubList.next = previous;
    } else {
      head = previous;
    }
  
    // Connect the reversed part to the remaining list
    firstNodeOfSubList.next = current;
  
    return head;
}



// Example
// 1 → 2 → 3 → 4 → 5 → null

// p = 2
// q = 4

// We reverse:

// 2 → 3 → 4

// Result:

// 1 → 4 → 3 → 2 → 5 → null
// Important saved nodes

// Before reversing:

// nodeBeforeSubList = 1
// firstNodeOfSubList = 2

// After reversing, node 4 becomes the beginning of the reversed section, while node 2 becomes its end.

// So we reconnect:

// 1 → 4
// 2 → 5

// These lines do that:

// nodeBeforeSubList.next = previous;
// firstNodeOfSubList.next = current;
// Why q - p + 1?

// Both positions are included.

// For:

// p = 2
// q = 4

// The positions are:

// 2, 3, 4

// Count:

// 4 - 2 + 1 = 3





// why here the loop starts from 1:   for (let i = 1; i < p; i++) {
//     previous = current;
//     current = current.next;
//   }
// and here from zero: 
//   for (let i = 0; i < q - p + 1; i++) {
//     nextNode = current.next;
//     current.next = previous;
//     previous = current;
//     current = nextNode;
//   }

// Because the two loops are counting different things.

// First loop: move to position p
// for (let i = 1; i < p; i++) {
//   previous = current;
//   current = current.next;
// }

// Linked-list positions start from 1.

// Initially:

// current is already at position 1

// So i starts at 1.

// For example, when p = 3:

// Start: current at position 1

// i = 1 → move to position 2
// i = 2 → move to position 3

// Then the loop stops because i < 3 is false.

// So after the loop:

// current = node at position p
// previous = node at position p - 1
// Second loop: reverse a number of nodes
// for (let i = 0; i < q - p + 1; i++) {
//   nextNode = current.next;
//   current.next = previous;
//   previous = current;
//   current = nextNode;
// }

// This loop is not tracking linked-list positions. It is counting how many nodes have been reversed.

// Before the loop, zero nodes have been reversed, so i starts at 0.

// For:

// p = 2
// q = 4

// The number of nodes to reverse is:

// q - p + 1
// = 4 - 2 + 1
// = 3

// The loop runs three times:

// i = 0 → reverse first node
// i = 1 → reverse second node
// i = 2 → reverse third node
// Simple difference
// First loop starts at 1:
// because positions are numbered from 1.

// Second loop starts at 0:
// because initially zero nodes have been reversed.
