// Sum of Subarray Minimums: Given an array of integers arr, return the sum of the minimum values from all possible contiguous subarrays within arr. 
// Since the result can be very large, return the final sum modulo (109 + 7).

// Examples
// Example 1:

// Input: arr = [3, 1, 2, 4, 5]
// Expected Output: 30

// solution:
// Use a monotonic increasing stack and calculate how many subarrays use each element as their minimum.

// For every arr[i], find:

// previousLess[i]: nearest index on the left containing a strictly smaller value
// nextLessOrEqual[i]: nearest index on the right containing a smaller or equal value

// Then:

// number of subarrays where arr[i] is minimum
// = choices on left × choices on right

function sumSubarrayMins(arr) {
    const MOD = 1_000_000_007;
    const n = arr.length;
  
    const previousLess = new Array(n);
    const nextLessOrEqual = new Array(n);
    const stack = [];
  
    // Find previous strictly smaller element
    for (let i = 0; i < n; i++) {
      while (
        stack.length > 0 &&
        arr[stack[stack.length - 1]] >= arr[i]
      ) {
        stack.pop();
      }
  
      previousLess[i] =
        stack.length > 0 ? stack[stack.length - 1] : -1;
  
      stack.push(i);
    }
  
    stack.length = 0;
  
    // Find next smaller or equal element
    for (let i = n - 1; i >= 0; i--) {
      while (
        stack.length > 0 &&
        arr[stack[stack.length - 1]] > arr[i]
      ) {
        stack.pop();
      }
  
      nextLessOrEqual[i] =
        stack.length > 0 ? stack[stack.length - 1] : n;
  
      stack.push(i);
    }
  
    let sum = 0;
  
    for (let i = 0; i < n; i++) {
      const leftChoices = i - previousLess[i];
      const rightChoices = nextLessOrEqual[i] - i;
  
      const contribution =
        arr[i] * leftChoices * rightChoices;
  
      sum = (sum + contribution) % MOD;
    }
  
    return sum;
}





// Let’s solve:

// arr = [3, 1, 2, 4, 5]

// The goal is to add the minimum value of every contiguous subarray.

// A brute-force method would list all subarrays, but the efficient idea is:

// For each number, count how many subarrays have that number as the minimum.

// Then:

// contribution = value × number of such subarrays
// Step 1: Focus on one element

// Take 2:

// Index:  0  1  2  3  4
// Array: [3, 1, 2, 4, 5]
//               ↑

// We want to know how far a subarray containing 2 can expand while 2 remains the minimum.

// To the left, we immediately find 1, which is smaller than 2.

// [3, 1, 2, 4, 5]
//     ↑  ↑
//  smaller 2

// Therefore, a subarray where 2 is the minimum cannot include 1.

// To the right, both 4 and 5 are greater than 2, so we can include them.

// Possible subarrays where 2 is the minimum:

// [2]
// [2, 4]
// [2, 4, 5]

// There are 3 such subarrays.

// So 2 contributes:

// 2 × 3 = 6
// General formula

// For every element at index i, we find:

// previous smaller element
// next smaller or equal element

// Then calculate:

// leftChoices  = i - previousSmallerIndex
// rightChoices = nextSmallerIndex - i

// The number of subarrays is:

// leftChoices × rightChoices

// Its contribution is:

// arr[i] × leftChoices × rightChoices

// Now let’s calculate this for every element.

// Element 3 at index 0
// [3, 1, 2, 4, 5]
//  ↑

// The nearest smaller element on the left does not exist:

// previous smaller index = -1

// The nearest smaller element on the right is 1 at index 1:

// next smaller index = 1

// Calculate choices:

// leftChoices = 0 - (-1) = 1
// rightChoices = 1 - 0 = 1

// So the number of subarrays where 3 is the minimum is:

// 1 × 1 = 1

// That subarray is:

// [3]

// Contribution:

// 3 × 1 = 3
// Element 1 at index 1
// [3, 1, 2, 4, 5]
//     ↑

// There is no smaller number than 1 on either side.

// So:

// previous smaller index = -1
// next smaller index = 5

// We use 5 because the array length is 5, meaning no smaller element exists on the right.

// Calculate choices:

// leftChoices = 1 - (-1) = 2
// rightChoices = 5 - 1 = 4

// Why are there two left choices?

// The subarray can start at:

// index 1 → [1...]
// index 0 → [3, 1...]

// Why are there four right choices?

// The subarray can end at:

// index 1
// index 2
// index 3
// index 4

// Therefore:

// 2 × 4 = 8 subarrays

// Those subarrays are:

// [1]
// [1, 2]
// [1, 2, 4]
// [1, 2, 4, 5]

// [3, 1]
// [3, 1, 2]
// [3, 1, 2, 4]
// [3, 1, 2, 4, 5]

// In all eight subarrays, 1 is the minimum.

// Contribution:

// 1 × 8 = 8
// Element 2 at index 2
// [3, 1, 2, 4, 5]
//        ↑

// Nearest smaller element on the left:

// 1 at index 1

// No smaller element exists on the right:

// next smaller index = 5

// Calculate choices:

// leftChoices = 2 - 1 = 1
// rightChoices = 5 - 2 = 3

// Number of subarrays:

// 1 × 3 = 3

// Subarrays:

// [2]
// [2, 4]
// [2, 4, 5]

// Contribution:

// 2 × 3 = 6
// Element 4 at index 3
// [3, 1, 2, 4, 5]
//           ↑

// Nearest smaller element on the left:

// 2 at index 2

// No smaller element exists on the right.

// previous smaller index = 2
// next smaller index = 5

// Choices:

// leftChoices = 3 - 2 = 1
// rightChoices = 5 - 3 = 2

// Subarrays:

// [4]
// [4, 5]

// Contribution:

// 4 × 2 = 8
// Element 5 at index 4
// [3, 1, 2, 4, 5]
//              ↑

// Nearest smaller element on the left:

// 4 at index 3

// No element exists on the right.

// previous smaller index = 3
// next smaller index = 5

// Choices:

// leftChoices = 4 - 3 = 1
// rightChoices = 5 - 4 = 1

// Only one subarray:

// [5]

// Contribution:

// 5 × 1 = 5
// Add all contributions
// Element 3 contributes 3
// Element 1 contributes 8
// Element 2 contributes 6
// Element 4 contributes 8
// Element 5 contributes 5

// Total:

// 3 + 8 + 6 + 8 + 5 = 30

// So the answer is:

// 30
// Summary table
// Value	Left choices	Right choices	Subarrays	Contribution
// 3	1	1	1	3
// 1	2	4	8	8
// 2	1	3	3	6
// 4	1	2	2	8
// 5	1	1	1	5

// The monotonic stack is only used to find the nearest smaller indexes efficiently.

// Today 11:18 PM

// // Find previous strictly smaller element for (let i = 0; i < n; i++) { while ( stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i] ) { stack.pop(); } previousLess[i] = stack.length > 0 ? stack[stack.length - 1] : -1; stack.push(i); }

// how come this will stop at the given number when it's going till n and we just want to calculate the previous smaller element ?

// The for loop goes through the whole array because we need the previous smaller element for every index, not just one number.

// for (let i = 0; i < n; i++) {

// At each iteration, i represents the current number whose previous smaller element we are calculating.

// For example:

// arr = [3, 1, 2, 4, 5]

// The loop runs like this:

// i = 0 → find previous smaller for 3
// i = 1 → find previous smaller for 1
// i = 2 → find previous smaller for 2
// i = 3 → find previous smaller for 4
// i = 4 → find previous smaller for 5

// So it does not stop at one number. It calculates one answer per iteration and stores it in:

// previousLess[i]
// Example at i = 2

// Current value:

// arr[2] = 2

// Before processing 2, the stack contains indexes from the left side only:

// stack = [1]

// That means:

// arr[1] = 1

// The condition is:

// while (
//   stack.length > 0 &&
//   arr[stack[stack.length - 1]] >= arr[i]
// ) {
//   stack.pop();
// }

// Check:

// arr[1] >= arr[2]
// 1 >= 2 → false

// So the loop stops immediately.

// Then:

// previousLess[2] = stack[stack.length - 1];

// which gives:

// previousLess[2] = 1

// So the previous smaller element for 2 is 1 at index 1.

// Why does the while loop stop at the correct number?

// The stack is maintained so that its values are increasing.

// For example, while processing 4, the stack may represent:

// [1, 2]

// meaning values:

// [1, 2]

// The top is the nearest candidate on the left.

// We remove values that are not smaller:

// arr[top] >= arr[i]

// As soon as the top becomes smaller than arr[i], the while condition becomes false.

// That remaining top is the nearest previous smaller element.

// Example with popping

// Suppose:

// arr = [3, 5, 2]

// When processing 2:

// stack values = [3, 5]

// Check top:

// 5 >= 2 → pop 5
// 3 >= 2 → pop 3

// Stack becomes empty, meaning no smaller value exists on the left.

// So:

// previousLess[2] = -1;

// The key difference is:

// for loop   → calculates the answer for every array element
// while loop → removes invalid candidates for the current element

// nextLessOrEqual[i] = stack.length > 0 ? stack[stack.length - 1] : n;

// why is else case assigned n ?

// Because n acts as a virtual boundary just after the last index.

// The code is:

// nextLessOrEqual[i] =
//   stack.length > 0 ? stack[stack.length - 1] : n;

// Suppose:

// arr = [3, 1, 2, 4, 5];
// n = 5;

// Valid indices are:

// 0, 1, 2, 3, 4

// So index 5 does not exist. We use it to mean:

// “There is no smaller-or-equal element on the right.”
// Example: value 2 at index 2
// [3, 1, 2, 4, 5]
//        ↑

// There is no smaller-or-equal value to the right of 2.

// So:

// nextLessOrEqual[2] = n; // 5

// Then:

// rightChoices = nextLessOrEqual[2] - 2;
// rightChoices = 5 - 2 = 3

// Those three ending positions are:

// index 2 → [2]
// index 3 → [2, 4]
// index 4 → [2, 4, 5]

// So using n correctly lets the subarray extend all the way to the end.

// Why not use -1?

// -1 is used for the missing boundary on the left because it represents a position just before index 0.

// Left virtual boundary:  -1
// Valid indices:        0 1 2 3 4
// Right virtual boundary:          5

// Therefore:

// previousLess[i] = -1; // no smaller value on the left
// nextLessOrEqual[i] = n; // no smaller-or-equal value on the right

// These virtual boundaries make the distance formulas work naturally:

// leftChoices = i - previousLess[i];
// rightChoices = nextLessOrEqual[i] - i;

// For 1 at index 1:

// previousLess = -1
// nextLessOrEqual = 5

// leftChoices = 1 - (-1) = 2
// rightChoices = 5 - 1 = 4

// So n does not represent an actual element. It means the current element can extend to the final index of the array.