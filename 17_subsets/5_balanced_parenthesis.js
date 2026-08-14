// Balanced Parentheses: For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.

// Example 1:
// Input: N=2
// Output: (()), ()()


// solution:
// This is a BFS / generation pattern problem.
// For every partial parentheses string, we can:
// add ( if we still have opening parentheses available
// add ) only if it would still keep the string balanced

function generateParentheses(n) {
    const result = [];
  
    const queue = [
      {
        str: "",
        open: 0,
        close: 0
      }
    ];
  
    while (queue.length > 0) {
      const current = queue.shift();
  
      // Complete combination
      if (current.open === n && current.close === n) {
        result.push(current.str);
        continue;
      }
  
      // Add opening parenthesis
      if (current.open < n) {
        queue.push({
          str: current.str + "(",
          open: current.open + 1,
          close: current.close
        });
      }
  
      // Add closing parenthesis
      if (current.close < current.open) {
        queue.push({
          str: current.str + ")",
          open: current.open,
          close: current.close + 1
        });
      }
    }
  
    return result;
}




// For:

// generateParentheses(2);

// we start with:

// str   = ""
// open  = 0
// close = 0

// We can add ( because:

// open < n
// 0 < 2

// So:

// "("
// open = 1
// close = 0

// Can we add ) to the empty string?

// No, because:

// close < open
// 0 < 0   ❌

// This is important. We don't want:

// ")"

// because that is already unbalanced.

// Now we have:

// "("
// open = 1
// close = 0

// There are two possibilities.

// Add (

// Because:

// open < n
// 1 < 2 ✅

// we get:

// "(("
// open = 2
// close = 0
// Add )

// Because:

// close < open
// 0 < 1 ✅

// we also get:

// "()"
// open = 1
// close = 1

// So our paths now look like:

//         ""
//         |
//         (
//        / \
//      ((   ()

// Now consider:

// "(("
// open = 2
// close = 0

// Can we add another (?

// No:

// open < n
// 2 < 2 ❌

// We've already used both opening parentheses.

// But we can add ):

// close < open
// 0 < 2 ✅

// So:

// "(("
//  ↓

// "(()

// Now:

// "(("
//  → "(()"

// At "(()":

// open = 2
// close = 1

// Again, no more (.

// But we can add ):

// close < open
// 1 < 2 ✅

// giving:

// "(())"

// Now:

// open = 2
// close = 2

// We have used all N = 2 pairs, so:

// result.push("(())");

// Now go back to the other branch:

// "()"

// open = 1
// close = 1

// Can we add )?

// No:

// close < open
// 1 < 1 ❌

// If we did, we'd get:

// "())"

// which is invalid.

// But we can add (:

// open < n
// 1 < 2 ✅

// So:

// "()("

// Then:

// open = 2
// close = 1

// Now we can add ):

// "()()"

// And:

// open = 2
// close = 2

// so it's complete.

// Final answer:

// [
//   "(())",
//   "()()"
// ]

// The whole generation tree is:

//               ""
//               |
//               (
//            /     \
//          ((       ()
//          |         |
//         (()       ()(
//          |         |
//        (())       ()()

// The most important condition is:

// if (current.close < current.open)

// This means:

// We can only add ) if there is an unmatched ( available for it.

// For example:

// "(()"

// open  = 2
// close = 1

// There is one opening parenthesis waiting to be closed, so adding ) is valid.

// But for:

// "()"

// open  = 1
// close = 1

// everything is already matched. Adding another ) would give:

// "())" ❌

// So remember these two rules:

// Add "(" when:
// open < n

// Add ")" when:
// close < open

// That guarantees we only generate balanced combinations instead of generating every possible string and checking afterward.

// didn't understand it

// Think of open and close simply as counters.

// For N = 2, we must use exactly:

// 2 opening brackets:  (
// 2 closing brackets:  )

// So a valid answer must have 4 characters total.

// The only two valid results are:

// (())
// ()()

// Now let’s build them slowly.

// Start with nothing:

// ""

// open = 0
// close = 0

// Can we add (?

// Yes, because we still have opening brackets available.

// "("

// open = 1
// close = 0

// At this point, we have used one (.

// Now from "(", we have two choices.

// We can add another (:

// "(("

// open = 2
// close = 0

// Or we can add ):

// "()"

// open = 1
// close = 1

// So far:

//         ""
//          |
//          (
//        /   \
//      ((     ()

// Now look at "((".

// We already used both opening brackets:

// open = 2
// n = 2

// So we cannot add another (.

// We can only add ):

// "((" -> "(()"

// Now:

// open = 2
// close = 1

// Again, we cannot add ( because we've already used 2.

// So add another ):

// "(()" -> "(())"

// Now:

// open = 2
// close = 2

// Done.

// So one answer is:

// (())

// Now go back to the other branch:

// "()"

// open = 1
// close = 1

// Can we add another )?

// No.

// Why?

// Because that would give:

// "())"

// which is invalid.

// There is no unmatched ( waiting for that new ).

// So from "()", we must add (:

// "()" -> "()("

// Now:

// open = 2
// close = 1

// Now we can add ):

// "()(" -> "()()"

// Done:

// open = 2
// close = 2

// So the complete tree is:

//           ""
//            |
//            (
//          /   \
//        ((     ()
//        |       |
//       (()     ()(
//        |       |
//      (())     ()()

// Now the two conditions should make more sense.

// This one:

// if (current.open < n)

// means:

// Have we used fewer than N opening brackets?

// For N = 2:

// open = 0 → can add (
// open = 1 → can add (
// open = 2 → cannot add (

// And this one:

// if (current.close < current.open)

// means:

// Is there an opening bracket available that hasn't been closed yet?

// For example:

// "(("

// open = 2
// close = 0

// We can add ) because:

// 0 < 2 ✅

// But:

// "()"

// open = 1
// close = 1

// We cannot add ) because:

// 1 < 1 ❌

// Otherwise we'd get:

// "())" ❌

// So the entire problem boils down to just two rules:

// Want to add "("?
// → make sure open < N

// Want to add ")"?
// → make sure close < open

// The second rule is the key one: you can never have more closing brackets than opening brackets while building the string.