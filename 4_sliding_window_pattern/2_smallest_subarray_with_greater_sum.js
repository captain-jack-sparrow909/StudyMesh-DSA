// Smallest Subarray With a Greater Sum: 
// Given an array of positive integers and a number ‘S,’ find the length of the smallest contiguous subarray whose sum is greater than or equal to 'S'. 
// Return 0 if no such subarray exists.

function smallestSubarrayLength(arr, S) {
    let windowStart = 0;
    let windowSum = 0;
    let minLength = Infinity;
  
    for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
      windowSum += arr[windowEnd];
  
      while (windowSum >= S) {
        const currentLength = windowEnd - windowStart + 1;
  
        minLength = Math.min(minLength, currentLength);
  
        windowSum -= arr[windowStart];
        windowStart++;
      }
    }
  
    return minLength === Infinity ? 0 : minLength;
}