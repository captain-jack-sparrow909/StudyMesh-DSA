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