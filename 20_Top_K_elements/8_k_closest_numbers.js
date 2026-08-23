// 'K' Closest Numbers: Given a sorted number array and two integers ‘K’ and ‘X’, find ‘K’ closest numbers to ‘X’ in the array. 
// Return the numbers in the sorted order. ‘X’ is not necessarily present in the array.

// **Example 1**:

// ```
// Input: [5, 6, 7, 8, 9], K = 3, X = 7
// Output: [6, 7, 8]

// ```

// **Example 2**:

// ```
// Input: [2, 4, 5, 6, 9], K = 3, X = 6
// Output: [4, 5, 6]
// ```

// solution:
// This one is a little different from the previous K Closest Points problem.

// Here, because the array is already sorted, we can solve it without a heap.

// The key idea is:

// Find where X would be inserted, then expand left and right to pick the closest numbers.

// Example 1
// nums = [5, 6, 7, 8, 9]
// K = 3
// X = 7

// We want 3 numbers closest to 7.

// Start around 7:

// 5   6   7   8   9
//         ↑
//         X

// Compare numbers on both sides:

// 6 → distance 1
// 7 → distance 0
// 8 → distance 1

// So:

// [6, 7, 8]
// The important idea

// Because the array is sorted, the closest numbers to X will be next to each other.

// For example:

// [2, 4, 5, 6, 9]

// X = 6, K = 3

// The answer must be a consecutive section:

// [4, 5, 6]

// It can't be:

// [2, 6, 9]

// because 4 and 5 are closer.

// So the problem becomes:

// Find the correct window of size K.

// Step 1: Find the position of X

// We can use binary search.

// For:

// [5, 6, 7, 8, 9]
// X = 7

// we find:

// index = 2

// But X doesn't necessarily exist.

// For example:

// [5, 6, 8, 9]
// X = 7

// 7 would belong between:

// 6 and 8

// So we need to know where X would be inserted.

// Step 2: Use two pointers

// Once we know the position, we have:

// left
// right

// and compare:

// Math.abs(nums[left] - X)

// with:

// Math.abs(nums[right] - X)

// Whichever is closer, we take.

// Example
// [5, 6, 7, 8, 9]
//       ↑
//       X

// Initially:

// left = 1
// right = 3

// Compare:

// 6 → distance 1
// 8 → distance 1

// They are equally close.

// Usually for this problem, when equal, we choose the smaller number, so choose 6.

// Then:

// [6]

// Next compare:

// 5 → distance 2
// 8 → distance 1

// Choose 8.

// Now:

// [6, 8]

// Next:

// 7 → distance 0

// Choose 7.

// We have:

// [6, 7, 8]
// But there's an even simpler solution

// Because the array is sorted, we can use a sliding window.

// We need to find the best window of size K.

// For:

// [5, 6, 7, 8, 9]
// K = 3
// X = 7

// Possible windows:

// [5, 6, 7]
// [6, 7, 8] ← best
// [7, 8, 9]

// Calculate how far the edges are from X.

// For a window starting at i, compare:

// X - nums[i]

// with:

// nums[i + K] - X

// Why?

// Because we're deciding:

// Should I move the window left or right?

function findClosestNumbers(nums, k, x) {
    let left = 0;
    let right = nums.length - k;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      // Compare the two possible edges
      if (x - nums[mid] > nums[mid + k] - x) {
        // Right side is closer
        left = mid + 1;
      } else {
        // Left side is closer
        right = mid;
      }
    }
  
    return nums.slice(left, left + k);
}

// nums = [2, 4, 5, 6, 9]
// K = 3
// X = 6


// Let's understand the confusing part

// This:

// if (x - nums[mid] > nums[mid + k] - x)

// is basically asking:

// How far is X from the LEFT edge?

//         versus

// How far is X from the RIGHT edge?

// Suppose:

// nums = [2, 4, 5, 6, 9]
// K = 3
// X = 6

// Consider:

// [2, 4, 5]

// Left edge:

// 6 - 2 = 4

// Right edge outside the window:

// 6 - 6 = 0

// So:

// 4 > 0

// The right side is closer.

// Therefore we move the window right.

// Eventually:

// [4, 5, 6]
// Why nums[mid + k]?

// This is an important detail.

// Suppose:

// K = 3

// and the window starts at:

// mid = 0

// The window is:

// [nums[0], nums[1], nums[2]]

// The element immediately outside the right side is:

// nums[3]

// That's:

// nums[mid + k]

// So we're comparing:

// left edge of current window
//         ↓
// nums[mid]

//         with

// right edge just outside window
//         ↓
// nums[mid + k]
// Example 2
// nums = [2, 4, 5, 6, 9]
// K = 3
// X = 6

// Possible answer:

// [4, 5, 6]

// The final window starts at index 1.

// 2 | 4  5  6 | 9
//     ←  K=3  →

// Return:

// [4, 5, 6]
// Do we need a heap?

// No.

// This is an important distinction from:

// K Closest Points

// There, the points aren't sorted, so we used a heap.

// Here:

// array is sorted

// That gives us much more information, allowing us to use binary search + sliding window.

// Remember:
// Unsorted + K closest
//         ↓
//       Heap

// Sorted + K closest
//         ↓
// Binary search / two pointers

// Time: O(log(N-K) + K)
// Space: O(K) for the returned array.
