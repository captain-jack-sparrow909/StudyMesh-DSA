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


// Now let's understand it step by step.

// Example: key = 'f'
// ['a', 'c', 'f', 'h']

// Initially:

// start = 0
// end = 3
// Step 1
// mid = 1

// So:

// letters[mid] = 'c'

// Compare:

// c <= f

// Yes.

// So c cannot be our answer.

// Everything before c is also too small.

// Move right:

// start = mid + 1;

// Now:

// start = 2
// end = 3
// Step 2
// mid = 2

// We get:

// letters[mid] = 'f'

// But:

// f <= f

// Yes.

// We cannot use f because we need something greater than f.

// So move right again:

// start = mid + 1;

// Now:

// start = 3
// end = 3
// Step 3
// mid = 3

// We get:

// letters[mid] = 'h'

// Now:

// h <= f

// No.

// So h is a possible answer.

// But maybe there's something smaller than h that is still greater than f.

// So search left:

// end = mid - 1;

// Now:

// start = 3
// end = 2

// Loop stops.

// start is:

// 3

// Therefore:

// letters[3]

// is:

// 'h'
// Why start % letters.length?

// This is the circular part of the problem.

// Imagine:

// ['a', 'c', 'f', 'h']

// After h, we go back to a:

// a → c → f → h
// ↑           |
// └───────────┘

// Suppose:

// key = 'h'

// There is nothing greater than h.

// Our binary search will eventually give:

// start = 4

// But:

// letters[4]

// doesn't exist.

// Because the array has indexes:

// 0  1  2  3
// a  c  f  h

// So we need to go back to index 0.

// That's what:

// start % letters.length

// does:

// 4 % 4 = 0

// Therefore:

// letters[4 % 4]

// becomes:

// letters[0]

// which is:

// 'a'

// So:

// key = h
// answer = a
// The important condition

// Remember this:

// if (letters[mid] <= key)

// We use <=, not <.

// Why?

// Because the problem says:

// Find the smallest letter greater than the key.

// So if we have:

// key = f
// letters[mid] = f

// f is not valid.

// Therefore:

// f <= f

// and we move right.

// Remember these 3 rules
// letters[mid] < key
// → too small → go RIGHT

// letters[mid] === key
// → not greater → go RIGHT

// letters[mid] > key
// → possible answer → go LEFT

// Or combine the first two:

// letters[mid] <= key
//     ↓
// go RIGHT

// And finally:

// return letters[start % letters.length];

// means:

// start is where the next greater letter should be. If start goes past the end, wrap around to the beginning.
