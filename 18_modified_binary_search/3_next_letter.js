// Next Letter: Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.
// Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that 
// the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.
// Write a function to return the next letter of the given ‘key’.

// Example 1:

// Input: ['a', 'c', 'f', 'h'], key = 'f'
// Output: 'h'


// solution:
// This is very similar to Ceiling of a Number, but there is one important difference:

// We need the smallest letter strictly greater than the key.

// For:

// ['a', 'c', 'f', 'h']
// key = 'f'

// We want:

// 'h'

// We cannot return f because it must be greater than f.

// Step 1: Think about the array
// index:  0   1   2   3
//         a   c   f   h

// We want the first letter that is:

// > key

// For key = 'f':

// a   c   f   h
//             ↑
//            > f

// Answer = h.

function searchNextLetter(letters, key) {
    let start = 0;
    let end = letters.length - 1;
  
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
  
      if (letters[mid] <= key) {
        // Current letter is too small OR equal
        start = mid + 1;
      } else {
        // Current letter is greater than key
        end = mid - 1;
      }
    }
  
    return letters[start % letters.length];
}
