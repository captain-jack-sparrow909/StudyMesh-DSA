// Implementing Stack Data Structure: Stacks are a Last-In, First-Out (LIFO) data structure that supports four main operations: 
// Push, Pop, Peek (Top), and IsEmpty. In this lesson, we will first explain these operations in detail and then implement a stack 
// using arrays and linked lists.

// solution: 
// A stack follows LIFO:

// Last In, First Out

// The last item added is the first item removed.

// Think of a stack of plates:

// Top
//  ↓
// [ Plate 3 ]  ← removed first
// [ Plate 2 ]
// [ Plate 1 ]
// Main stack operations
// push(value)

// Adds a value to the top of the stack.

// Before: [1, 2]
// push(3)
// After:  [1, 2, 3]
// pop()

// Removes and returns the top value.

// Before: [1, 2, 3]
// pop() returns 3
// After:  [1, 2]
// peek()

// Returns the top value without removing it.

// Before: [1, 2, 3]
// peek() returns 3
// After:  [1, 2, 3]
// isEmpty()

// Checks whether the stack contains no elements.

// []        → true
// [1, 2, 3] → false
// Stack using an array

// JavaScript arrays already provide efficient stack operations:

// push() adds at the end
// pop() removes from the end



// stack using array: 
// We add and remove from the end of the array. Avoid using shift() or unshift() for a stack because they require moving other elements and take O(n) time.
class ArrayStack {
    constructor() {
      this.items = [];
    }
  
    push(value) {
      this.items.push(value);
    }
  
    pop() {
      if (this.isEmpty()) {
        return undefined;
      }
  
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return undefined;
      }
  
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
}



// stack using Linked List:

class StackNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
class LinkedListStack {
    constructor(value) {
        this.length = 0;
        this.top = null;
    }

    push(value) {
        let newNode = new StackNode(value);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.top = this.top.next;
        this.length--;
        return this.top.value;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.top.value;
    }

    isEmpty() {
        return this.top === null;
    }

    size() {
        return this.length;
    }
}