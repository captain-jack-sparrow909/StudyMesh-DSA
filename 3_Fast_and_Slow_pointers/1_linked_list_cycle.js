class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const isCyclic = (head) => {
    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (fast === slow) {
            return true;
        }
    }

    return false;
}



const head = new Node(2);
head.next = new Node(3);
head.next.next = new Node(6);
head.next.next.next = new Node(9);
head.next.next.next.next = head.next.next.next;

console.log(isCyclic(head));