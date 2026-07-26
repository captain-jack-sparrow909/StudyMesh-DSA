// Reverse a LinkedList: Given the head of a Singly LinkedList, reverse the LinkedList. Write a function to return the new head of the reversed LinkedList.
// Constraints:
// The number of nodes in the list is the range [0, 5000].
// -5000 <= Node.val <= 5000


// solution:
// Use three pointers:

// previous — the node behind the current node
// current — the node being processed
// nextNode — saves the next node before changing the link

const reverseLinkedList = (head) => {
    let current = head;
    let previous = null;

    while(current !== null) {
        const nextNode = current.next;
        current.next = previous;
        previous = current;
        current = nextNode;
    }

    return previous;
}



// Example

// Original list:

// 1 → 2 → 3 → 4 → null

// After reversing:

// 4 → 3 → 2 → 1 → null
// Step by step

// Initially:

// previous = null
// current = 1

// First iteration:

// nextNode = 2
// 1.next = null
// previous = 1
// current = 2

// List so far:

// 1 → null

// 2 → 3 → 4 → null

// Second iteration:

// nextNode = 3
// 2.next = 1
// previous = 2
// current = 3

// Now:

// 2 → 1 → null

// 3 → 4 → null

// This continues until current becomes null.

// At the end:

// previous → 4 → 3 → 2 → 1 → null

// So we return:

// return previous;

// because previous is now the new head.

// Why save nextNode first?

// Before changing:

// current.next = previous;

// we must save the original next node. Otherwise, we would lose access to the remaining linked list.
