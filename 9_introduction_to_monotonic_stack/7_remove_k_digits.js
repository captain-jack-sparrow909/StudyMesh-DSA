// Remove K Digits: Given a non-negative integer represented as a string num and an integer k, delete k digits from num to obtain the smallest possible integer. 
// Return this minimum possible integer as a string.

// Examples

// Input: num = "1432219", k = 3
// Output: "1219"


// solution: 
// Use a monotonic increasing stack.

// To make the number as small as possible, remove a larger digit whenever a smaller digit appears after it.

function removeKDigits(num, k) {
    const stack = [];
  
    for (const digit of num) {
      while (
        k > 0 &&
        stack.length > 0 &&
        stack[stack.length - 1] > digit
      ) {
        stack.pop();
        k--;
      }
  
      stack.push(digit);
    }
  
    // If digits are already increasing, remove from the end
    while (k > 0) {
      stack.pop();
      k--;
    }
  
    // Remove leading zeros
    const result = stack.join("").replace(/^0+/, "");
  
    return result === "" ? "0" : result;
}

// Example
// removeKDigits("1432219", 3);
// // "1219"
// Step by step

// Start with:

// num = "1432219"
// k = 3
// stack = []
// Process 1

// Stack is empty, so push:

// stack = [1]
// k = 3
// Process 4

// 4 is greater than the top 1, so push:

// stack = [1, 4]
// k = 3
// Process 3

// The top is 4, and:

// 4 > 3

// Removing 4 makes the number smaller, so pop it:

// stack = [1]
// k = 2

// Now 1 > 3 is false, so push 3:

// stack = [1, 3]
// Process 2

// Top is 3:

// 3 > 2

// Pop 3:

// stack = [1]
// k = 1

// Push 2:

// stack = [1, 2]
// Process next 2

// Top is also 2.

// 2 > 2 → false

// We do not remove equal digits, so push:

// stack = [1, 2, 2]
// k = 1
// Process 1

// Top is 2:

// 2 > 1

// Pop 2:

// stack = [1, 2]
// k = 0

// We have removed all three required digits, so push 1:

// stack = [1, 2, 1]
// Process 9

// Since k = 0, no more removals are allowed:

// stack = [1, 2, 1, 9]

// Final result:

// "1219"

// The removed digits were:

// 4, 3, 2

// So:

// 1432219 → 1219
// Why remove a bigger previous digit?

// Compare:

// 14...
// 13...

// A number beginning with 13 is smaller than one beginning with 14.

// Digits toward the left have greater place value, so removing a large digit early usually gives the smallest result.

// That is why we check:

// stack[stack.length - 1] > digit
// Why use while, not if?

// One small digit might need to remove several larger digits.

// Example:

// num = "4321"
// k = 2

// When processing 2, several previous larger digits may need to be removed. The while loop keeps removing while:

// top digit > current digit

// and removals remain available.

// Why remove from the end afterward?

// Consider:

// num = "12345"
// k = 2

// No digit is smaller than the digit before it, so nothing is removed during the main loop.

// To make the number smallest, remove the largest digits at the end:

// 12345 → 123

// That is handled by:

// while (k > 0) {
//   stack.pop();
//   k--;
// }
// Leading-zero example
// removeKDigits("10200", 1);

// Remove 1 because 1 > 0:

// 0200

// After removing leading zeros:

// 200