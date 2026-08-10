// Sliding Window Median: Given an array of numbers and a number ‘k’, find the median of all the ‘k’ sized sub-arrays (or windows) of the array.

// Example 1:

// Input: nums=[1, 2, -1, 3, 5], k = 2
// Output: [1.5, 0.5, 1.0, 4.0]
// Explanation: Let's consider all windows of size ‘2’:

// [1, 2, -1, 3, 5] -> median is 1.5
// [1, 2, -1, 3, 5] -> median is 0.5
// [1, 2, -1, 3, 5] -> median is 1.0
// [1, 2, -1, 3, 5] -> median is 4.0


// solution: 
// This is the same two-heaps idea as “Median of a Number Stream,” but now we also need to remove the number that leaves the sliding window.
// For understanding, use this simpler JavaScript version first: keep the current window sorted.

function slidingWindowMedian(nums, k) {
    const result = [];
    const window = [];
  
    for (let i = 0; i < nums.length; i++) {
      // Add current number
      window.push(nums[i]);
  
      // Keep window sorted
      window.sort((a, b) => a - b);
  
      // Remove number that is no longer in the window
      if (i >= k) {  // “Have I moved far enough that an old element must now be removed?”
        const numberToRemove = nums[i - k];
        const index = window.indexOf(numberToRemove);
  
        window.splice(index, 1);
      }
  
      // Once we have k elements, calculate median
      if (i >= k - 1) {   // “Do I already have a complete window of size k?”
        if (k % 2 === 1) {
          // odd size
          result.push(window[Math.floor(k / 2)]);
        } else {
          // even size
          const middle1 = window[k / 2 - 1];
          const middle2 = window[k / 2];
  
          result.push((middle1 + middle2) / 2);
        }
      }
    }
  
    return result;
}



// For:

// nums = [1, 2, -1, 3, 5];
// k = 2;

// the first window is:

// [1, 2]

// Already sorted:

// [1, 2]

// Since k = 2 is even, median is the average of the two middle values:

// (1 + 2) / 2 = 1.5

// Next we add -1:

// [1, 2, -1]

// Sort:

// [-1, 1, 2]

// But the window size should only be 2, so remove the old number:

// nums[i - k]

// At this moment:

// i = 2
// k = 2

// i - k = 0

// nums[0] = 1

// Remove 1:

// [-1, 2]

// Median:

// (-1 + 2) / 2 = 0.5

// Next add 3:

// [-1, 2, 3]

// Remove the old value:

// nums[3 - 2]
// nums[1]
// 2

// Now:

// [-1, 3]

// Median:

// (-1 + 3) / 2 = 1

// Next add 5:

// [-1, 3, 5]

// Remove:

// nums[4 - 2]
// nums[2]
// -1

// Window becomes:

// [3, 5]

// Median:

// (3 + 5) / 2 = 4

// So:

// [1.5, 0.5, 1, 4]

// The most important line is:

// const numberToRemove = nums[i - k];

// Why i - k?

// Because once we add a new element, the element exactly k positions behind is the one falling out of the window.

// For k = 2:

// i = 0 → [1]
// i = 1 → [1, 2]

// i = 2 → add -1
//          1 is now too old
//          index = 2 - 2 = 0

// So the sliding pattern is:

// [1, 2]          median 1.5
//    [2, -1]      median 0.5
//       [-1, 3]   median 1
//           [3,5] median 4

// The heap-based solution is more efficient, but it is also noticeably more complex because JavaScript heaps need a way
//  to remove arbitrary elements that leave the window. This sorted-window version is much better for first understanding the problem.







// why we've at once place:     if (i >= k) {
//     and at another place:     if (i >= k - 1) {
    
//     Because those two conditions are checking two different moments.
    
//     if (i >= k - 1) means:
    
//     “Do I already have a complete window of size k?”
    
//     if (i >= k) means:
    
//     “Have I moved far enough that an old element must now be removed?”
    
//     Using:
    
//     nums = [1, 2, -1, 3, 5]
//     k = 2
    
//     Indexes are:
    
//     index:  0   1   2   3   4
//     nums:   1   2  -1   3   5
    
//     A window of size 2 first becomes complete when:
    
//     i = 1
    
//     because we now have:
    
//     indexes 0 and 1
//     [1, 2]
    
//     And:
    
//     k - 1 = 2 - 1 = 1
    
//     So:
    
//     if (i >= k - 1)
    
//     starts calculating medians at exactly the right time.
    
//     At i = 0:
    
//     [1]
    
//     Not enough elements yet.
    
//     At i = 1:
    
//     [1, 2]
    
//     Now we have k = 2 elements, so calculate the median.
    
//     Now consider:
    
//     if (i >= k)
    
//     At i = 2, we add -1.
    
//     Temporarily we have:
    
//     [1, 2, -1]
    
//     But our window can only contain 2 elements.
    
//     So now we must remove the oldest one:
    
//     nums[i - k]
//     nums[2 - 2]
//     nums[0]
//     1
    
//     After removing 1:
    
//     [2, -1]
    
//     So removal begins at:
    
//     i = k
    
//     not at k - 1.
    
//     The easiest way to remember it is:
    
//     i >= k - 1
//     → window is big enough
//     → calculate median
    
//     i >= k
//     → window has moved forward
//     → remove the old element
    
//     For k = 2:
    
//     i = 0    [1]           no median, no removal
    
//     i = 1    [1,2]         median ✅
//              first full window
    
//     i = 2    [1,2,-1]      remove 1 ✅
//              [2,-1]        median ✅
    
//     i = 3    [2,-1,3]      remove 2 ✅
//              [-1,3]        median ✅
    
//     So k - 1 is about when the first complete window exists, while k is about when the first old element needs to leave.
    
//     result.push(window[Math.floor(k / 2)]);
    
//             const middle1 = window[k / 2 - 1];
//             const middle2 = window[k / 2];
//     from where these formulas came
    
//     These formulas come from array indexes when the window size k is even.
    
//     Suppose:
    
//     k = 4;
    
//     A sorted window might be:
    
//     [1, 2, 5, 8]
    
//     Indexes are:
    
//     index:  0  1  2  3
//     value:  1  2  5  8
    
//     For an even number of elements, the median is the average of the two middle values:
    
//     2 and 5
    
//     Their indexes are:
    
//     1 and 2
    
//     Now calculate:
    
//     k / 2
    
//     For k = 4:
    
//     4 / 2 = 2
    
//     That gives the right-middle index:
    
//     window[k / 2]
//     // window[2] = 5
    
//     The left-middle index is one position before that:
    
//     window[k / 2 - 1]
//     // window[1] = 2
    
//     So:
    
//     const middle1 = window[k / 2 - 1];
//     const middle2 = window[k / 2];
    
//     means:
    
//     left middle  = index 1
//     right middle = index 2
    
//     Then:
    
//     (middle1 + middle2) / 2
    
//     gives:
    
//     (2 + 5) / 2 = 3.5
    
//     For your earlier example with:
    
//     k = 2;
    
//     window:
    
//     [-1, 2]
    
//     indexes:
    
//     index:  0   1
//     value: -1   2
    
//     Now:
    
//     k / 2 = 1
    
//     So:
    
//     middle1 = window[1 - 1] = window[0] = -1
//     middle2 = window[1]     = 2
    
//     Median:
    
//     (-1 + 2) / 2 = 0.5
    
//     The reason this looks a little strange is that arrays are 0-indexed.
    
//     If humans say:
    
//     4 elements
//     middle positions = 2nd and 3rd
    
//     array indexes for those positions are:
    
//     1 and 2
    
//     because:
    
//     position: 1  2  3  4
//     index:    0  1  2  3
    
//     So the general rule for an even-sized array of length k is:
    
//     leftMiddleIndex = k / 2 - 1;
//     rightMiddleIndex = k / 2;
    
//     For odd k, there is only one middle element, which is why we use:
    
//     window[Math.floor(k / 2)]
    
//     Example k = 5:
    
//     indexes: 0 1 2 3 4
//                  ↑
//               middle
//     Math.floor(5 / 2)
//     // 2
    
//     So the core idea is simply:
    
//     even k → two middle indexes:
//     k/2 - 1 and k/2
    
//     odd k → one middle index:
//     floor(k/2)
