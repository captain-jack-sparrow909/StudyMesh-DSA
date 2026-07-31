// Next Greater Element: Given two integer arrays nums1 and nums2, return an array answer such that answer[i] is the next greater number for every nums1[i] in nums2.

// The next greater element for an element x is the first element to the right of x that is greater than x. If there is no greater number, output -1 for that number.

// The numbers in nums1 are all present in nums2.

// Examples

// Input: nums1 = [4,2,6], nums2 = [6,2,4,5,3,7]
// Output: [5,4,7]
// Explanation: The next greater number for 4 is 5, for 2 is 4, and for 6 is 7 in nums2.


// solution:
// Use a monotonic decreasing stack on nums2 to find the next greater element for every value, then look up the answers for nums1.

function nextGreaterElement(nums1, nums2) {
    const stack = [];
    const nextGreaterMap = new Map();
  
    for (const num of nums2) {
      while (
        stack.length > 0 &&
        stack[stack.length - 1] < num
      ) {
        const smallerNumber = stack.pop();
        nextGreaterMap.set(smallerNumber, num);
      }
  
      stack.push(num);
    }
  
    // Numbers still in the stack have no greater value on their right
    while (stack.length > 0) {
      nextGreaterMap.set(stack.pop(), -1);
    }
  
    return nums1.map(num => nextGreaterMap.get(num));
}

// Example
// const nums1 = [4, 2, 6];
// const nums2 = [6, 2, 4, 5, 3, 7];

// console.log(nextGreaterElement(nums1, nums2));
// // [5, 4, 7]
// Step by step through nums2

// Start:

// nums2 = [6, 2, 4, 5, 3, 7]

// stack = []
// map = {}
// Process 6

// Stack is empty, so push 6.

// stack = [6]
// Process 2

// 2 is not greater than the stack top 6, so push it.

// stack = [6, 2]
// Process 4

// 4 is greater than the stack top 2.

// 2 → next greater is 4

// Pop 2 and store:

// map = {
//   2: 4
// }

// Now the top is 6. Since 4 is not greater than 6, stop and push 4.

// stack = [6, 4]
// Process 5

// 5 is greater than 4.

// 4 → next greater is 5

// Store it:

// map = {
//   2: 4,
//   4: 5
// }

// 5 is not greater than 6, so push it.

// stack = [6, 5]
// Process 3

// 3 is smaller than 5, so push it.

// stack = [6, 5, 3]
// Process 7

// 7 is greater than 3, so:

// 3 → 7

// It is also greater than 5:

// 5 → 7

// It is also greater than 6:

// 6 → 7

// Now:

// map = {
//   2: 4,
//   4: 5,
//   3: 7,
//   5: 7,
//   6: 7
// }

// Push 7:

// stack = [7]

// 7 has no greater element on its right, so:

// 7 → -1
// Build the answer for nums1
// nums1 = [4, 2, 6]

// 4 → 5
// 2 → 4
// 6 → 7

// Result:

// [5, 4, 7]
// Why does the stack work?

// The stack keeps values that have not yet found a greater number.

// When a larger number appears, it becomes the next greater element for every smaller value popped from the top.