// Given the head of a Singly LinkedList, write a method to modify the LinkedList such that the nodes from the second half of the 
// LinkedList are inserted alternately to the nodes from the first half in reverse order. 
// So if the LinkedList has nodes 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null, your method should return 1 -> 6 -> 2 -> 5 -> 3 -> 4 -> null.

// Your algorithm should use only constant space the input LinkedList should be modified in-place.


// Use three steps:

// Find the middle.
// Reverse the second half.
// Merge both halves alternately.

const reArrangeLinkedList = (head) => {
    if (head === null || head.next === null) {
        return head;
    }

    //finding the middle:
    let slow = head;
    let fast = head;

    while( fast !== null && fast.next !== null ){
        slow = slow.next;
        fast = fast.next;
    }

    //getting the different halfs:  let head = 1 → 2 → 3 → 4 → 5 → 6 → null
    let firstHalf = head;  // 1 -> 2 -> 3 -> 4
    let secondHalf = reversedList(slow)  // 6 -> 5 -> 4

    //now merging:
    while(secondHalf !== null && firstHalf !== null) {
        // These lines save the next nodes before changing links:
        const firstNext = firstHalf.next; //2     //3
        const secondNext = secondHalf.next; //5   //4

        firstHalf.next = secondHalf;   // firstHalf =>1, secondHalf => 6; so 1->6
        secondHalf.next = firstNext;   // firstNext => 2; so chain become => 1->6->2

        firstHalf = firstNext;  //move to the 2's node
        secondHalf = secondNext;  //move to the 5's node
    }

    return head;  //we return head because while firstHalf and secondHalf has moved here and there into the nodes, head still points to the first node

}

const reversedList = (head) => {
    const previous = null;
    const current = head;

    while(current !== null) {
        const nextNode = current.next;
        current.next = previous;
        previous = current;
        current = nextNode
    }

    return previous;
}
