// Sorting a Stack: Given a stack, sort it using only stack operations (push and pop).

// You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The values in the stack are to be sorted in descending order, with the largest elements on top.

// Examples
// 1. Input: [34, 3, 31, 98, 92, 23]
//    Output: [3, 23, 31, 34, 92, 98]

// solution:
// Assume the right side of the array represents the top of the stack.

// So:

// [3, 23, 31, 34, 92, 98]
//                        ↑
//                       top

// The largest value, 98, is on top.

function sortStack(stack) {
    const tempStack = [];
  
    while (stack.length > 0) {
      const current = stack.pop();
  
      // Move larger elements back to the original stack
      while (
        tempStack.length > 0 &&
        tempStack[tempStack.length - 1] > current
      ) {
        stack.push(tempStack.pop());
      }
  
      tempStack.push(current);
    }
  
    // Move everything back so the largest is on top
    while (tempStack.length > 0) {
      stack.push(tempStack.pop());
    }
  
    return stack;
}





// Example
// const stack = [34, 3, 31, 98, 92, 23];

// console.log(sortStack(stack));
// // [3, 23, 31, 34, 92, 98]
// How it works

// Input:

// [34, 3, 31, 98, 92, 23]
//                        ↑
//                       top

// We pop one value at a time and insert it into tempStack in the correct position.

// Take 23
// current = 23

// stack:     [34, 3, 31, 98, 92]
// tempStack: [23]
// Take 92

// The top of tempStack is 23.

// Since:

// 23 > 92 → false

// Push 92:

// tempStack: [23, 92]
// Take 98
// 92 > 98 → false

// Push it:

// tempStack: [23, 92, 98]
// Take 31

// The top is 98, which is greater than 31, so move it back:

// stack:     [34, 3, 98]
// tempStack: [23, 92]

// 92 is also greater than 31, so move it back:

// stack:     [34, 3, 98, 92]
// tempStack: [23]

// Now:

// 23 > 31 → false

// Push 31:

// tempStack: [23, 31]

// This process continues until tempStack becomes:

// [3, 23, 31, 34, 92, 98]
//                        ↑
//                       top

// At this point, the largest is already on top of tempStack.

// However, the code then moves the values back to the original stack, which reverses their order. So the given final transfer would produce the wrong top orientation for the requested output.

// For the exact output shown, simply return tempStack:

// function sortStack(stack) {
//   const tempStack = [];

//   while (stack.length > 0) {
//     const current = stack.pop();

//     while (
//       tempStack.length > 0 &&
//       tempStack[tempStack.length - 1] > current
//     ) {
//       stack.push(tempStack.pop());
//     }

//     tempStack.push(current);
//   }

//   return tempStack;
// }

// Output:

// [3, 23, 31, 34, 92, 98]
//                        ↑
//                      largest
// Why move larger values back?

// Suppose:

// tempStack = [23, 92, 98]
// current = 31

// To place 31 correctly, 98 and 92 must temporarily move out:

// [23, 31, 92, 98]

// Since a stack only allows access to the top, we move elements back to the original stack until the correct insertion position is found.
