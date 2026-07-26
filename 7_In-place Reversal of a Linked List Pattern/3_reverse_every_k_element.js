// Reverse every K-element Sub-list: Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.

// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000

// solution: 
// We reverse the list in groups of k.
// Unlike the usual “reverse nodes in k-group” problem, here we also reverse the final group even when it contains fewer than k nodes.

function reverseEveryKElements(head, k) {
    if (head === null || k <= 1) {
      return head;
    }
  
    let current = head;
    let previous = null;
  
    let previousGroupEnd = null;
    let newHead = null;
  
    while (current !== null) {
        const currentGroupStart = current;
      
        let count = 0;
      
        while (current !== null && count < k) {
          const nextNode = current.next;
      
          current.next = previous;
          previous = current;
          current = nextNode;
      
          count++;
        }
      
        // The first reversed group creates the new head
        if (newHead === null) {
          newHead = previous;
        }
      
        // Connect the previous group to this reversed group
        if (previousGroupEnd !== null) {
          previousGroupEnd.next = previous;
        }

        // The old group start is now the end of this group
        currentGroupStart.next = current;
        previousGroupEnd = currentGroupStart;
      
        // Start the next group's reversal independently
        previous = null;
      }
  
    return newHead;
}

// Example
// 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → null

// k = 3

// Groups are:

// [1, 2, 3]
// [4, 5, 6]
// [7, 8]

// Reverse each group:

// [3, 2, 1]
// [6, 5, 4]
// [8, 7]

// Final result:

// 3 → 2 → 1 → 6 → 5 → 4 → 8 → 7 → null
// Important variables
// const currentGroupStart = current;

// This saves the first node of the current group.

// Before reversing:

// 1 → 2 → 3

// After reversing:

// 3 → 2 → 1

// The old first node, 1, becomes the end of the group. We need it to connect to the next group.

// currentGroupStart.next = current;

// This connects the end of the reversed group to the next unprocessed node.

// For the first group:

// 3 → 2 → 1 → 4

// Then, after reversing the second group, this line connects both groups:

// previousGroupEnd.next = previous;

// Result:

// 3 → 2 → 1 → 6 → 5 → 4





// This line:

// previous = previousGroup;

// resets previous before reversing the next group.

// At the end of reversing the first group:

// 1 → 2 → 3

// we have:

// 3 → 2 → 1

// and:

// previous = node 3;
// current = node 4;

// But node 3 belongs to the group we just finished. When reversing the next group:

// 4 → 5 → 6

// we want it to be reversed independently:

// 6 → 5 → 4

// So before processing the next group, previous should effectively start as null, not node 3.

// That is what this part handles:

// const previousGroup = previous;

// At the beginning of the first group, previous is null, so:

// previousGroup = null;

// After finishing the group:

// previous = previousGroup;

// becomes:

// previous = null;

// Now the next group can be reversed independently.

