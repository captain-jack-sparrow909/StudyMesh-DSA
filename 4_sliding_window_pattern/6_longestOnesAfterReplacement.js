// Longest Subarray with Ones after Replacement: Given an array containing 0s and 1s, if you are allowed to replace no 
// more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

function longestOnesAfterReplacement(arr, k) {
    let windowStart = 0;
    let maxLength = 0;
    let zeroCount = 0;
  
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      if (arr[windowEnd] === 0) {
        zeroCount++;
      }
  
      // Too many zeros to replace
      while (zeroCount > k) {
        if (arr[windowStart] === 0) {
          zeroCount--;
        }
  
        windowStart++;
      }
  
      maxLength = Math.max(
        maxLength,
        windowEnd - windowStart + 1
      );
    }
  
    return maxLength;
  }



  longestOnesAfterReplacement(
    [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
    2
  );

//   Output: 6

// One longest valid subarray is: [0, 1, 1, 0, 1, 1]

// It contains two zeros. Replace them: [1, 1, 1, 1, 1, 1]
// So its length is 6.



//######################## step by step example below //########################
// We are allowed to replace at most `2` zeros.

// ```javascript
// longestOnesAfterReplacement(
//   [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
//   2
// );
// ```

// We use a sliding window.

// Initial values:

// ```text
// windowStart = 0
// zeroCount = 0
// maxLength = 0
// ```

// ### Step 1: `windowEnd = 0`

// Current value:

// ```text
// 0
// ```

// So:

// ```text
// zeroCount = 1
// ```

// Current window:

// ```text
// [0]
// ```

// Length:

// ```text
// 1
// ```

// ```text
// maxLength = 1
// ```

// ---

// ### Step 2: `windowEnd = 1`

// Current value:

// ```text
// 1
// ```

// Current window:

// ```text
// [0, 1]
// ```

// Zeros:

// ```text
// 1
// ```

// Length:

// ```text
// 2
// ```

// ```text
// maxLength = 2
// ```

// ---

// ### Step 3: `windowEnd = 2`

// Current value:

// ```text
// 1
// ```

// Current window:

// ```text
// [0, 1, 1]
// ```

// Zeros:

// ```text
// 1
// ```

// Length:

// ```text
// 3
// ```

// ```text
// maxLength = 3
// ```

// ---

// ### Step 4: `windowEnd = 3`

// Current value:

// ```text
// 0
// ```

// ```text
// zeroCount = 2
// ```

// Current window:

// ```text
// [0, 1, 1, 0]
// ```

// We can replace both zeros, so the window is valid.

// Length:

// ```text
// 4
// ```

// ```text
// maxLength = 4
// ```

// ---

// ### Step 5: `windowEnd = 4`

// Current value:

// ```text
// 0
// ```

// ```text
// zeroCount = 3
// ```

// Current window:

// ```text
// [0, 1, 1, 0, 0]
// ```

// We only have `k = 2`, so three zeros are not allowed.

// Shrink from the left.

// The leftmost value is `0`, so remove it:

// ```text
// windowStart = 1
// zeroCount = 2
// ```

// New window:

// ```text
// [1, 1, 0, 0]
// ```

// Length:

// ```text
// 4
// ```

// ```text
// maxLength remains 4
// ```

// ---

// ### Step 6: `windowEnd = 5`

// Current value:

// ```text
// 0
// ```

// ```text
// zeroCount = 3
// ```

// Current window:

// ```text
// [1, 1, 0, 0, 0]
// ```

// Too many zeros, so shrink from the left.

// Remove index `1`, which contains `1`:

// ```text
// windowStart = 2
// zeroCount = 3
// ```

// Still too many zeros.

// Remove index `2`, which also contains `1`:

// ```text
// windowStart = 3
// zeroCount = 3
// ```

// Still too many zeros.

// Remove index `3`, which contains `0`:

// ```text
// windowStart = 4
// zeroCount = 2
// ```

// New valid window:

// ```text
// [0, 0]
// ```

// Length:

// ```text
// 2
// ```

// ```text
// maxLength remains 4
// ```

// ---

// ### Step 7: `windowEnd = 6`

// Current value:

// ```text
// 1
// ```

// Window:

// ```text
// [0, 0, 1]
// ```

// Zeros:

// ```text
// 2
// ```

// Length:

// ```text
// 3
// ```

// ```text
// maxLength remains 4
// ```

// ---

// ### Step 8: `windowEnd = 7`

// Current value:

// ```text
// 1
// ```

// Window:

// ```text
// [0, 0, 1, 1]
// ```

// Length:

// ```text
// 4
// ```

// ```text
// maxLength remains 4
// ```

// ---

// ### Step 9: `windowEnd = 8`

// Current value:

// ```text
// 0
// ```

// ```text
// zeroCount = 3
// ```

// Window:

// ```text
// [0, 0, 1, 1, 0]
// ```

// Too many zeros, so shrink.

// Remove index `4`, which is `0`:

// ```text
// windowStart = 5
// zeroCount = 2
// ```

// New window:

// ```text
// [0, 1, 1, 0]
// ```

// Length:

// ```text
// 4
// ```

// ---

// ### Step 10: `windowEnd = 9`

// Current value:

// ```text
// 1
// ```

// Window:

// ```text
// [0, 1, 1, 0, 1]
// ```

// Zeros:

// ```text
// 2
// ```

// Length:

// ```text
// 5
// ```

// ```text
// maxLength = 5
// ```

// ---

// ### Step 11: `windowEnd = 10`

// Current value:

// ```text
// 1
// ```

// Window:

// ```text
// [0, 1, 1, 0, 1, 1]
// ```

// Zeros:

// ```text
// 2
// ```

// Length:

// ```text
// 6
// ```

// ```text
// maxLength = 6
// ```

// Replace the two zeros:

// ```text
// [0, 1, 1, 0, 1, 1]
//  ↓        ↓
// [1, 1, 1, 1, 1, 1]
// ```

// Therefore, the answer is:

// ```text
// 6
// ```
