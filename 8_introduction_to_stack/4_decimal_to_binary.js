// Decimal to Binary Conversion: Given a positive integer n, write a function that returns its binary equivalent as a string. The function should not use any in-built binary conversion function.

// Examples
// Example 1:

// Input: 2
// Output: "10"
// Explanation: The binary equivalent of 2 is 10.

// solution: 
// Use repeated division by 2.
// Each remainder is either 0 or 1. Push the remainders onto a stack, then pop them to build the binary number in the correct order.

function decimalToBinary(n) {
    if (n === 0) {
      return "0";
    }
  
    const stack = [];
  
    while (n > 0) {
      const remainder = n % 2;
      stack.push(remainder);
  
      n = Math.floor(n / 2);
    }
  
    let binary = "";
  
    while (stack.length > 0) {
      binary += stack.pop();
    }
  
    return binary;
}