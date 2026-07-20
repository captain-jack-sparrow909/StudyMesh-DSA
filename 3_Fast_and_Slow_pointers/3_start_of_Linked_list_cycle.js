// We solve it in two steps:

// Use slow and fast pointers to find where they meet inside the cycle.
// Move one pointer back to head, then move both one step at a time. Their next meeting point is the start of the cycle.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// 1 → 2 → 3 → 4 → 5
//         ↑         ↓
//         ← ← ← ← ←

const startOfLinkedListCycle = (head) => {
    const slow = head;
    const fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        //first meeting point:
        if (slow === fast) {   //we compare the nodes rather than values as different nodes could contain same values.
            break;
        }
    }

    //checking if cycle doesn't exist:
    if (fast === null || fast.next === null) {
        return null;
    }
 
    // now we reset the slow pointer to head
    slow = head;

    //we move each by 1 node, next meeting point is the start of the cycle:
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}

const cycleStart = startOfLinkedListCycle(head)