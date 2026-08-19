// Minimum Difference Element: Given an array of numbers sorted in ascending order, find the element in the array that has the minimum difference with the given ‘key’.

// Example 1:

// Input: [4, 6, 10], key = 7
// Output: 6
// Explanation: The difference between the key '7' and '6' is minimum than any other number in the array 
// Example 2:

// Input: [4, 6, 10], key = 4
// Output: 4

// solution:
// This is another Binary Search problem.

// The main idea is:

// Find the position where key would be inserted, then compare the numbers on the left and right.

// Example
// [4, 6, 10]
// key = 7

// 7 would belong between 6 and 10:

// 4   6   |   10
//         ↑
//         7

// So we only need to compare:

// 6 and 10

// Differences:

// |7 - 6| = 1
// |7 - 10| = 3

// Therefore:

// answer = 6

function searchMinDiffElement(nums, key) {
    let start = 0;
    let end = nums.length - 1;
  
    // If key is outside the array
    if (key < nums[0]) {
      return nums[0];
    }
  
    if (key > nums[nums.length - 1]) {
      return nums[nums.length - 1];
    }
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
  
      // Exact match
      if (nums[mid] === key) {
        return nums[mid];
      }
  
      if (nums[mid] < key) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    // key is between nums[end] and nums[start]
    const left = nums[end];
    const right = nums[start];
  
    if (Math.abs(key - left) <= Math.abs(key - right)) {
      return left;
    }
  
    return right;
}


// Let's understand the important part

// Take:

// [4, 6, 10]
// key = 7

// Binary search eventually reaches:

// end = 1
// start = 2

// So:

// nums[end]   = 6
// nums[start] = 10

// And we know:

// 6 < 7 < 10

// So the closest number must be either 6 or 10.

// We compare:

// Math.abs(7 - 6)  // 1
// Math.abs(7 - 10) // 3

// 1 is smaller, so return 6.

// Why end and start?

// This is the key thing to understand.

// During binary search:

// if (nums[mid] < key) {
//     start = mid + 1;
// }

// We're saying:

// mid is too small, so go right.

// And:

// else {
//     end = mid - 1;
// }

// means:

// mid is too big, so go left.

// Eventually they cross:

//         end start
//           ↓   ↓
// [4, 6, 10]
//     ↑    ↑
//     6    10

// At that point:

// nums[end] < key < nums[start]

// So these are the two closest candidates.

// Example 2
// [4, 6, 10]
// key = 4

// We immediately find:

// nums[mid] === key

// So:

// return nums[mid];

// Answer:

// 4
// What if key = 1?
// [4, 6, 10]
// key = 1

// 1 is smaller than everything.

// The closest number is obviously:

// 4

// That's why we have:

// if (key < nums[0]) {
//     return nums[0];
// }
// What if key = 20?
// [4, 6, 10]
// key = 20

// 20 is bigger than everything.

// The closest number is:

// 10

// That's why:

// if (key > nums[nums.length - 1]) {
//     return nums[nums.length - 1];
// }
// Remember this pattern

// For Minimum Difference Element:

// 1. Binary search for key.
//           ↓
// 2. If found → return it.
//           ↓
// 3. If not found, key is between two numbers.
//           ↓
// 4. Compare left and right.
//           ↓
// 5. Return whichever has smaller difference.

// The most important line is:

// Math.abs(key - left) <= Math.abs(key - right)

// Math.abs() just gives us the positive difference.

// For example:

// 7 - 10 = -3

// but the distance is 3, so:

// Math.abs(7 - 10) // 3

// In short: Binary Search gets us close; then we compare the two neighbors to find which one is actually closest.
