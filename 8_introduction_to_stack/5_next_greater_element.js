// Next Greater Element: Given an array, print the Next Greater Element (NGE) for every element.

// The Next Greater Element for an element x is the first greater element on the right side of x in the array.

// Elements for which no greater element exist, consider the next greater element as -1.

// Examples
// Example 1:

//  Input: [4, 5, 2, 25]
//  Output: [5, 25, 25, -1]

// solution:
// Use a monotonic decreasing stack.
// We scan from right to left because the next greater element must be on the right.

function nextGreaterElements(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = [];
  
    for (let i = nums.length - 1; i >= 0; i--) {
      while (
        stack.length > 0 &&
        stack[stack.length - 1] <= nums[i]
      ) {
        stack.pop();
      }
  
      if (stack.length > 0) {
        result[i] = stack[stack.length - 1];
      }
  
      stack.push(nums[i]);
    }
  
    return result;
}

// Example
// nextGreaterElements([4, 5, 2, 25]);
// // [5, 25, 25, -1]
// Step by step

// Start from the right:

// Array:  [4, 5, 2, 25]
// Result: [-1, -1, -1, -1]
// Stack:  []
// 25

// There is nothing on its right.

// result[3] = -1
// stack = [25]
// 2

// Top of stack is 25, which is greater than 2.

// result[2] = 25
// stack = [25, 2]
// 5

// Top is 2, but 2 is not greater than 5, so remove it:

// stack = [25]

// Now the top is 25, which is greater than 5.

// result[1] = 25
// stack = [25, 5]
// 4

// Top is 5, which is greater than 4.

// result[0] = 5
// stack = [25, 5, 4]

// Final result:

// [5, 25, 25, -1]
// Why do we pop smaller values?
// while (
//   stack.length > 0 &&
//   stack[stack.length - 1] <= nums[i]
// ) {
//   stack.pop();
// }

// For the current element, smaller or equal values can never be its next greater element.

// For example, while processing 5:

// stack top = 2

// Since 2 <= 5, it is useless, so we remove it. The next available value is 25.

// Why scan from right to left?

// When processing an element, the stack already contains useful elements from its right side.

// The top of the stack becomes the first valid greater candidate.
