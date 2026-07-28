// Balanced Parentheses: Given a string s containing (, ), [, ], {, and } characters. Determine if a given string of parentheses is balanced.
// A string of parentheses is considered balanced if every opening parenthesis has a corresponding closing parenthesis in the correct order.
// Example 1:

// Input: String s = "{[()]}";
// Expected Output: true

// solution: 
// Use a stack to remember opening brackets.
// When we encounter a closing bracket, it must match the most recent opening bracket.

function isBalanced(s) {
    const stack = [];
  
    const matchingBrackets = {
      ")": "(",
      "]": "[",
      "}": "{"
    };
  
    for (const char of s) {
      // Opening bracket
      if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
      } else {
        // Closing bracket must match the top
        if (stack.length === 0) {
          return false;
        }
  
        const top = stack.pop();
  
        if (top !== matchingBrackets[char]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
}

isBalanced("{[()]}");
// true

