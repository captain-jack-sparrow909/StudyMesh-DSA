// Palindrome LinkedList: Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.

// Use these steps:

// Find the middle of the linked list.
// Reverse the second half.
// Compare the first half with the reversed second half.
// Reverse the second half again to restore the original list.

const isPalindrom = (head) => {  // 1 2 3 3 2 1
    if (head === null || head.next === null) {
        return true;
    }

    let slow = head;
    let fast = head;

    //trying to get to the middle:
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //now we reverse the slow remaining nodes:
    let secondHalfHead = reverseNodes(slow)  // 1->2->3->null
    const reversedHeadCopy = secondHalfHead;  //later needed to again reverse it

    //initializin a variable:
    isPalindromeList = true;

    //now we compare both half:
    let firstHalf = head; // 1->2->3->3->2->1   that's why in below while we only consider secondHalfHead
    while (secondHalfHead !== null) {  // we didn't add secondHalfHead.next != null, otherwise it won't execute 3
        if (firstHalf.value !== secondHalfHead.value) {
            isPalindromeList = false;
            break;
        }

        firstHalf = firstHalf.next;
        secondHalfHead = secondHalfHead.next
    }

    //now we revert the second half:
    reverseNodes(reversedHeadCopy)

    return isPalindromeList
}

const reverseNodes = (head) => {  // 3, 2, 1
    let current = head;
    let previous = null;

    while (current !== null) {  //we didn't consider current.next != null otherwise 1 won't execute
        const nextNode = current.next;
        current.next = previous;
        previous = current   // 1 -> 2 -> 3 -> null
        current = nextNode;
    }

    return previous;   //previous has the reverse we need that is why we return it here
}