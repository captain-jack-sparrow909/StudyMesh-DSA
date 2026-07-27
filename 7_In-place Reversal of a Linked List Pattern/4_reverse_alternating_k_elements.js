// Reverse alternating K-element Sub-list: Given the head of a LinkedList and a number ‘k’, reverse every alternating ‘k’ sized sub-list starting from the head.

// If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

// Constraints:

// The number of nodes in the list is n.
// 1 <= k <= n <= 5000
// 0 <= Node.val <= 1000


// solution:
// We reverse the first k nodes, skip the next k nodes, reverse the next k, and continue alternating.

function reverseAlternatingKElements(head, k) {
    if (head === null || k <= 1) {
      return head;
    }
  
    let current = head;
    let previous = null;
  
    while (current !== null) {
      const lastNodeOfPreviousPart = previous;
      const lastNodeOfCurrentSubList = current;
  
      let count = 0;
  
      // Reverse the current group of up to k nodes
      while (current !== null && count < k) {
        const nextNode = current.next;
  
        current.next = previous;
        previous = current;
        current = nextNode;
  
        count++;
      }
  
      // Connect the previous part to the reversed group
      if (lastNodeOfPreviousPart !== null) {
        lastNodeOfPreviousPart.next = previous;
      } else {
        // The first reversed group creates the new head
        head = previous;
      }
  
      // The old first node is now the end of the reversed group
      lastNodeOfCurrentSubList.next = current;
  
      // Move previous to the end of the reversed group
      previous = lastNodeOfCurrentSubList;
  
      // Skip the next k nodes
      count = 0;
  
      while (current !== null && count < k) {
        previous = current;
        current = current.next;
        count++;
      }
    }
  
    return head;
  }



//   Example
//   1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → null
  
//   k = 2
  
//   Split into groups of 2:
  
//   [1, 2] [3, 4] [5, 6] [7, 8]
  
//   Alternate between reversing and skipping:
  
//   Reverse [1, 2] → [2, 1]
//   Skip    [3, 4] → [3, 4]
//   Reverse [5, 6] → [6, 5]
//   Skip    [7, 8] → [7, 8]
  
//   Result:
  
//   2 → 1 → 3 → 4 → 6 → 5 → 7 → 8 → null
//   First group step by step
  
//   Initial state:
  
//   current = 1
//   previous = null
  
//   Save important nodes:
  
//   const lastNodeOfPreviousPart = previous; // null
//   const lastNodeOfCurrentSubList = current; // node 1
  
//   1 is the first node of the group, but after reversing it will become the last node.
  
//   Reverse two nodes:
  
//   Reverse node 1
//   nextNode = 2
//   1.next = null
//   previous = 1
//   current = 2
//   Reverse node 2
//   nextNode = 3
//   2.next = 1
//   previous = 2
//   current = 3
  
//   Now:
  
//   2 → 1
  
//   current → 3 → 4 → 5 → 6...
  
//   Since this is the first group:
  
//   head = previous;
  
//   Now head points to node 2.
  
//   Connect the end of the reversed group to the remaining list:
  
//   lastNodeOfCurrentSubList.next = current;
  
//   This means:
  
//   1.next = 3
  
//   The list is now:
  
//   2 → 1 → 3 → 4 → 5 → 6...
//   Skip the next k nodes
  
//   After reversing, we have:
  
//   previous = 1
//   current = 3
  
//   Now skip two nodes:
  
//   Skip node 3:
//   previous = 3
//   current = 4
  
//   Skip node 4:
//   previous = 4
//   current = 5
  
//   We do not change any .next links while skipping.
  
//   So:
  
//   3 → 4
  
//   remains unchanged.
  
//   Now the next iteration starts at node 5, and [5, 6] gets reversed.
  
//   Why set this?
//   previous = lastNodeOfCurrentSubList;
  
//   After reversing [1, 2], node 1 becomes the last node:
  
//   2 → 1
  
//   So previous must point to node 1 before we begin skipping. This allows us to correctly track the node before the next group that will be reversed.
  
//   Final group with fewer than k nodes
  
//   Suppose:
  
//   1 → 2 → 3 → 4 → 5 → null
//   k = 3
  
//   The first group is reversed:
  
//   3 → 2 → 1
  
//   The remaining group has only:
  
//   4 → 5
  
//   That group is supposed to be skipped because it is the alternating non-reversed group.
  
//   But when a smaller final group occurs during a reversal turn, this condition:
  
//   current !== null && count < k
  
//   reverses all remaining nodes, even if there are fewer than k.
