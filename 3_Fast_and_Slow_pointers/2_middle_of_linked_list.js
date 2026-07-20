class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const getMiddle = (head) => {
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const middle = getMiddle(head);

console.log(middle.value); // 3