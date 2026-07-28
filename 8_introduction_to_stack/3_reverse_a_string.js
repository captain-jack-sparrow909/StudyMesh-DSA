// Reverse a String: Given a string, write a function that uses a stack to reverse the string. The function should return the reversed string.

// Examples
// Example 1:

// Input: "Hello, World!"
// Output: "!dlroW ,olleH"

// solution: 
// Use the stack’s Last-In, First-Out behavior:

// Push every character onto the stack.
// Pop characters one by one.
// Append each popped character to the result.

function reverseString(str) {
    const stack = [];
  
    // Push every character onto the stack
    for (const char of str) {
      stack.push(char);
    }
  
    let reversed = "";
  
    // Pop characters in reverse order
    while (stack.length > 0) {
      reversed += stack.pop();
    }
  
    return reversed;
}

console.log(reverseString("Hello, World!"));
// "!dlroW ,olleH"