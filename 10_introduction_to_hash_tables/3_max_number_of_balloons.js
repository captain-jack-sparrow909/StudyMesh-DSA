// Maximum Number of Balloons: Given a string, determine the maximum number of times the word "balloon" can be formed using the characters from the string. 
// Each character in the string can be used only once.

// Examples:

// Example 1:

// Input: "balloonballoon"
// Expected Output: 2


// solution:
// Count the letters needed to form "balloon".
// The word requires:
// b → 1
// a → 1
// l → 2
// o → 2
// n → 1
// So the answer is the minimum number of complete groups we can form from those counts.

function maxNumberOfBalloons(text) {
    const frequency = new Map();
  
    for (const char of text) {
      frequency.set(char, (frequency.get(char) || 0) + 1);
    }
  
    return Math.min(
      frequency.get("b") || 0,
      frequency.get("a") || 0,
      Math.floor((frequency.get("l") || 0) / 2),
      Math.floor((frequency.get("o") || 0) / 2),
      frequency.get("n") || 0
    );
}


// Example
// maxNumberOfBalloons("balloonballoon");
// // 2

// Character counts:

// b → 2
// a → 2
// l → 4
// o → 4
// n → 2

// Now calculate how many complete "balloon" words each character can support:

// b: 2 / 1 = 2
// a: 2 / 1 = 2
// l: 4 / 2 = 2
// o: 4 / 2 = 2
// n: 2 / 1 = 2

// Take the minimum:

// min(2, 2, 2, 2, 2) = 2

// So the result is:

// 2
// Why divide l and o by 2?

// Each "balloon" needs two l characters and two o characters.

// For example, if the string contains:

// l → 5 times

// then:

// Math.floor(5 / 2); // 2

// Those five l characters can support only two complete words.

