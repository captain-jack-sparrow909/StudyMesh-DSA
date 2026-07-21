// Smallest Subarray With a Greater Sum: 
// Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to 'S'. 
// Return 0 if no such subarray exists.

function smallestSubarrayLength(arr, S) {
    let windowStart = 0;
    let windowSum = 0;
    let minLength = Infinity;
  
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd];
  
      while (windowSum >= S) {   // Why use while instead of if? Once the sum reaches S, we keep removing elements from the left while the window is still valid.
        const currentLength = windowEnd - windowStart + 1;   // removing +1 would be wrong because it only measures the distance between the indices, not the number of elements.
  
        //eg: windowStart, windowEnd = 2, the window holds 1 element but if do windowEnd - windowStart it'd give us 0
        // windowStart and windowEnd point to indices, windowStart = 1, windowEnd = 3; so indices = 1, 2, 3; that's 3 elements, if you wouldn't add 1 then it'll give you 2 elements

        minLength = Math.min(minLength, currentLength);
  
        windowSum -= arr[windowStart];
        windowStart++;
      }
    }
  
    return minLength === Infinity ? 0 : minLength;
}

smallestSubarrayLength([2, 1, 5, 2, 3, 2], 7);

// [2, 1, 5] → sum 8, length 3
// [5, 2]    → sum 7, length 2
// [2, 3, 2] → sum 7, length 3
