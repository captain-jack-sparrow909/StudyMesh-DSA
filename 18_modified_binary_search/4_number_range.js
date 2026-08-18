// Number Range: Given an array of numbers sorted in ascending order, find the range of a given number ‘key’. 
// The range of the ‘key’ will be the first and last position of the ‘key’ in the array.

// Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].

// Example 1:

// Input: [4, 6, 6, 6, 9], key = 6
// Output: [1, 3]
// Example 2:

// Input: [1, 3, 8, 10, 15], key = 10
// Output: [3, 3]
// Example 3:

// Input: [1, 3, 8, 10, 15], key = 12
// Output: [-1, -1]


// solution:
// This is basically Binary Search twice.

// The only difference from normal binary search is:

// We don't just want to find 6. We want the first 6 and the last 6.

// For:

// [4, 6, 6, 6, 9]
// index:  0  1  2  3  4
//         4  6  6  6  9
//            ↑     ↑
//          first  last

// Answer:

// [1, 3]
// Why do we search twice?

// Because when we find 6, there might be more 6s on either side.

// So:

// Search 1 → find FIRST occurrence
// Search 2 → find LAST occurrence
// 1. Find the first occurrence

// Let's use:

// [4, 6, 6, 6, 9]
//  key = 6

// Normal binary search might find index 2.

// But we don't stop there.

// When we find:

// nums[mid] === key

// we say:

// "Great, I found a 6, but maybe there is another 6 to the LEFT."

// So:

// end = mid - 1;

// We keep searching left.

// Eventually we find:

// index 1

// That's the first occurrence.

// 2. Find the last occurrence

// Same idea, but opposite direction.

// When:

// nums[mid] === key

// we say:

// "I found a 6, but maybe there is another 6 to the RIGHT."

// So:

// start = mid + 1;

// Eventually we find:

// index 3

// That's the last occurrence.

function findRange(nums, key) {
    const first = findFirst(nums, key);
  
    // Key doesn't exist
    if (first === -1) {
      return [-1, -1];
    }
  
    const last = findLast(nums, key);
  
    return [first, last];
}

function findFirst(nums, key) {
    let start = 0;
    let end = nums.length - 1;
    let index = -1;
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
  
      if (nums[mid] === key) {
        index = mid;
  
        // Found key, but search further LEFT
        end = mid - 1;
      } else if (nums[mid] < key) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return index;
}

function findLast(nums, key) {
    let start = 0;
    let end = nums.length - 1;
    let index = -1;
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
  
      if (nums[mid] === key) {
        index = mid;
  
        // Found key, but search further RIGHT
        start = mid + 1;
      } else if (nums[mid] < key) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return index;
}





// Let's trace [4, 6, 6, 6, 9]
// Find first 6

// Suppose we find:

// mid = 2
// nums[2] = 6

// We found it:

// index = 2;

// But maybe there is another 6 on the left.

// So:

// end = mid - 1;

// Now:

// start = 0
// end = 1

// Search again and find:

// index = 1

// Now there is nothing further left.

// So:

// first = 1
// Find last 6

// Again we might initially find:

// mid = 2
// nums[2] = 6

// But maybe there is another 6 on the right.

// So:

// start = mid + 1;

// Now we search the right side and find:

// index = 3

// So:

// last = 3

// Final:

// [1, 3]
// The important trick

// This is the part to remember:

// Finding FIRST
// if (nums[mid] === key) {
//     index = mid;
//     end = mid - 1;  // keep going LEFT
// }
// Finding LAST
// if (nums[mid] === key) {
//     index = mid;
//     start = mid + 1;  // keep going RIGHT
// }

// That's really the entire difference.

// Why do we need index = -1?

// Suppose:

// [1, 3, 8, 10, 15]
// key = 12

// We never find 12.

// So index stays:

// -1

// and we return:

// [-1, -1]
// One sentence to remember

// Normal binary search stops when it finds the key; range search finds the key but keeps searching left for the first occurrence and right for the last occurrence.
