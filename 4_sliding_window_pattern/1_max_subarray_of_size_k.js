// Maximum Sum Subarray of Size K: Given an array of positive numbers and a positive number 'k,' find the maximum sum of any contiguous subarray of size 'k'.

// Use the sliding window technique.
// Instead of calculating every subarray from scratch, keep a running sum of exactly k numbers.

function maxSubarraySum(arr, k) {
    if (k > arr.length) {
      return 0;
    }
  
    let windowStart = 0;
    let windowSum = 0;
    let maxSum = 0;
  
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      // Add the new element to the window
      windowSum += arr[windowEnd];
  
      // When the window reaches size k
      if (windowEnd >= k - 1) {  //why k-1 ? For k = 3, the first complete window ends at index 2, windowEnd starts with 0
        maxSum = Math.max(maxSum, windowSum);
  
        // Remove the first element of the current window
        windowSum -= arr[windowStart];
        windowStart++;
      }
    }
  
    return maxSum;
}

maxSubarraySum([2, 1, 5, 1, 3, 2], 3);

// [2, 1, 5] → 8
// [1, 5, 1] → 7
// [5, 1, 3] → 9
// [1, 3, 2] → 6