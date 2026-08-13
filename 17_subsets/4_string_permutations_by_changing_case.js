// String Permutations by changing case: Given a string, find all of its permutations preserving the character sequence but changing case.

// Example 1:

// Input: "ad52"
// Output: "ad52", "Ad52", "aD52", "AD52"


// solution:
// This one is simpler than normal permutations because the character order does not change. We only decide, for every letter:

// keep its current case, or flip its case.

// Digits stay unchanged.


function letterCasePermutation(str) {
    let permutations = [str];
  
    for (let i = 0; i < str.length; i++) {
      // Skip numbers
      if (!/[a-zA-Z]/.test(str[i])) {
        continue;
      }
  
      const currentSize = permutations.length;
  
      for (let j = 0; j < currentSize; j++) {
        const chars = permutations[j].split("");
  
        // Change the case at position i
        chars[i] =
          chars[i] === chars[i].toLowerCase()
            ? chars[i].toUpperCase()
            : chars[i].toLowerCase();
  
        permutations.push(chars.join(""));
      }
    }
  
    return permutations;
}



// For:

// letterCasePermutation("ad52");

// we start with:

// permutations = ["ad52"]

// First character is a, which is a letter.

// We already have:

// ad52

// Change a to uppercase:

// Ad52

// Now:

// ad52
// Ad52

// Next character is d.

// We take both existing strings:

// ad52
// Ad52

// and flip d in each:

// ad52 → aD52
// Ad52 → AD52

// Now:

// [
//   "ad52",
//   "Ad52",
//   "aD52",
//   "AD52"
// ]

// Next character is 5.

// It is a number, so:

// if (!/[a-zA-Z]/.test(str[i])) {
//   continue;
// }

// skips it.

// Same with 2.

// So the final result is:

// ["ad52", "Ad52", "aD52", "AD52"]

// The important part is:

// const currentSize = permutations.length;

// This is the same idea you saw in Subsets.

// When processing d, suppose:

// permutations = ["ad52", "Ad52"];

// We save:

// currentSize = 2

// because we only want to process those 2 existing permutations. While processing them, we're adding new ones to the same array.

// The pattern is:

// Start:
// ad52

// Process a:
// ad52
// Ad52

// Process d:
// ad52
// Ad52
// aD52
// AD52

// Process 5:
// skip

// Process 2:
// skip

// Each letter doubles the number of possibilities because every letter has two choices:

// lowercase
// or
// uppercase

// So if there are L letters, there can be 2^L permutations.
