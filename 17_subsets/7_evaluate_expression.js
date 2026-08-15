// Evaluate Expression: Given an expression containing digits and operations (+, -, *), find all possible ways in which the
//  expression can be evaluated by grouping the numbers and operators using parentheses.

// Example 1:

// Input: "1+2*3"
// Output: 7, 9
// Explanation: 
//   1+(2*3) => 7
//   (1+2)*3 => 9



// solution:
// This problem is a Divide and Conquer problem.

// The main idea is:

// Every operator (+, -, *) can become the last operation to be performed.

// For:

// 1+2*3

// There are two operators:

// 1 + 2 * 3
//   ↑   ↑

// We'll try both.

// Step 1: Split at +

// Expression:

// 1 + 2*3

// Left part:

// 1

// Right part:

// 2*3

// Evaluate each side separately.

// Left:

// 1

// Right:

// 2*3 = 6

// Now combine them:

// 1 + 6 = 7

// So one answer is:

// 7
// Step 2: Split at *

// Expression:

// 1+2 * 3

// Left part:

// 1+2

// Right part:

// 3

// Evaluate left:

// 1+2 = 3

// Right:

// 3

// Combine:

// 3 * 3 = 9

// Another answer:

// 9

// Final result:

// [7, 9]
// Why recursion?

// Notice that when we split:

// 1 + 2*3

// the right side:

// 2*3

// is the same kind of problem.

// Likewise:

// 1+2

// is also the same kind of problem.

// So we recursively solve smaller expressions.


function diffWaysToEvaluate(expression) {
    const result = [];
  
    for (let i = 0; i < expression.length; i++) {
      const ch = expression[i];
  
      if (ch === "+" || ch === "-" || ch === "*") {
  
        const leftResults = diffWaysToEvaluate(expression.slice(0, i));
        const rightResults = diffWaysToEvaluate(expression.slice(i + 1));
  
        for (const left of leftResults) {
          for (const right of rightResults) {
  
            if (ch === "+") {
              result.push(left + right);
            } else if (ch === "-") {
              result.push(left - right);
            } else {
              result.push(left * right);
            }
  
          }
        }
      }
    }
  
    // Base case
    if (result.length === 0) {
      result.push(Number(expression));
    }
  
    return result;
}



// Let's trace it

// Expression:

// 2*3-4

// Operators:

// 2 * 3 - 4
//   ↑   ↑
// First split at *

// Left:

// 2

// Right:

// 3-4

// Right becomes:

// 3-4 = -1

// Combine:

// 2 * (-1)

// = -2
// Second split at -

// Left:

// 2*3

// Right:

// 4

// Left becomes:

// 6

// Combine:

// 6-4

// =2

// Final answers:

// [-2,2]
// Why these two loops?
// for (const left of leftResults) {
//     for (const right of rightResults) {

// Because each side can produce multiple answers.

// For example:

// left expression

// 2*3-4

// can produce:

// [-2,2]

// Suppose the right expression produces:

// [5,6]

// Then we must try every combination.

// -2 with 5

// -2 with 6

// 2 with 5

// 2 with 6

// That's why we use nested loops.

// Base case

// Eventually recursion reaches something like:

// "5"

// There is no operator.

// So:

// result.push(Number(expression));

// returns

// [5]

// Notice it returns an array, not a single number.

// Why?

// Because every recursive call always returns a list of all possible results.

// For "5" there is only one possible result:

// [5]

// For "1+2*3" there are two:

// [7, 9]