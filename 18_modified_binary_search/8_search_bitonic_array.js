// Search Bitonic Array: Given a Bitonic array, find if a given ‘key’ is present in it. An array is considered bitonic if it is first 
// monotonically increasing and then monotonically decreasing.

// In other words, a bitonic array starts with a sequence of increasing elements, reaches a peak element, and then follows with a 
// sequence of decreasing elements. The peak element is the maximum value in the array.

// Write a function to return the index of the ‘key’. If the 'key' appears more than once, return the smaller index. If the ‘key’ is not present, return -1.

// solution:
// This problem is basically 3 steps:

// 1. Find the peak
// 2. Binary search the increasing part
// 3. If not found, binary search the decreasing part

// The important detail is:

// Search the increasing part first, because if the key appears on both sides, the left side has the smaller index.

// Example
// [1, 3, 8, 12, 8, 5, 2]
//           ↑
//         peak

// Suppose:

// key = 8

// There are two 8s:

// index:  0  1  2   3  4  5  6
//         1  3  8  12  8  5  2
//            ↑          ↑
//           2           4

// We must return:

// 2

// not 4.

function findPeak(nums) {
    let start = 0;
    let end = nums.length - 1;
  
    while (start < end) {
      const mid = Math.floor((start + end) / 2);
  
      if (nums[mid] < nums[mid + 1]) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
  
    return start;
  }
  
  function binarySearchAscending(nums, key, start, end) {
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
  
      if (nums[mid] === key) {
        return mid;
      }
  
      if (nums[mid] < key) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return -1;
  }
  
  function binarySearchDescending(nums, key, start, end) {
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
  
      if (nums[mid] === key) {
        return mid;
      }
  
      if (nums[mid] < key) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  
    return -1;
  }
  
  function searchBitonicArray(nums, key) {
    const peak = findPeak(nums);
  
    const leftResult = binarySearchAscending(
      nums,
      key,
      0,
      peak
    );
  
    if (leftResult !== -1) {
      return leftResult;
    }
  
    return binarySearchDescending(
      nums,
      key,
      peak + 1,
      nums.length - 1
    );
  }
  