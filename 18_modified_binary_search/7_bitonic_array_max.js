// Bitonic Array Maximum: Find the maximum value in a given Bitonic array. An array is considered bitonic 
// if it is first monotonically increasing and then monotonically decreasing.

// In other words, a bitonic array starts with a sequence of increasing elements, reaches a peak element, 
// and then follows with a sequence of decreasing elements. The peak element is the maximum value in the array.

// Example 1:

// Input: [1, 3, 8, 12, 4, 2]
// Output: 12

// solution:
// This is a Binary Search problem.

// The important thing is to understand what a bitonic array looks like:

// [1, 3, 8, 12, 4, 2]
//           ↑
//         peak

// It goes:

// increasing → maximum → decreasing

// We want to find the peak (12).

// The trick

// Look at nums[mid] and the number right after it:

// nums[mid] < nums[mid + 1]

// There are only two possibilities.

// Case 1: We're going UP
//        mid
//         ↓
// [1, 3, 8, 12, 4, 2]
//        8   12
//        ↑    ↑

// If:

// 8 < 12

// we are still on the increasing side.

// So the peak must be to the right.

// start = mid + 1;
// Case 2: We're going DOWN
//              mid
//               ↓
// [1, 3, 8, 12, 4, 2]
//            12   4
//            ↑    ↑

// If:

// 12 > 4

// we are on the decreasing side.

// The peak is either:

// mid itself, or
// somewhere to the left.

// So:

// end = mid;

// Notice: not mid - 1.

// Why? Because mid itself could be the peak.

