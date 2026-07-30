// Simplify Path: Given an absolute file path in a Unix-style file system, simplify it by converting ".." to the previous directory 
// and removing any "." or multiple slashes. The resulting string should represent the shortest absolute path.

// Examples
// Example 1
// Input: path = "/a//b////c/d//././/.."
// Expected Output: "/a/b/c"


// solution: 
// Use a stack to store valid directory names.

// Rules:

// "" → ignore it; caused by repeated /
// "." → ignore it; means current directory
// ".." → remove the previous directory
// Anything else → push it onto the stack


function simplifyPath(path) {
    const stack = [];
    const parts = path.split("/");
  
    for (const part of parts) {
      if (part === "" || part === ".") {
        continue;
      }
  
      if (part === "..") {
        if (stack.length > 0) {
          stack.pop();
        }
      } else {
        stack.push(part);
      }
    }
  
    return "/" + stack.join("/");
}


// Example
// simplifyPath("/a//b////c/d//././/..");
// // "/a/b/c"
// Step by step

// Split the path by /:

// ["", "a", "", "b", "", "", "", "c", "d", "", ".", ".", "", ".."]

// Now process each part:

// part       action                    stack
// ""         ignore                    []
// "a"        push                      ["a"]
// ""         ignore                    ["a"]
// "b"        push                      ["a", "b"]
// ""         ignore                    ["a", "b"]
// "c"        push                      ["a", "b", "c"]
// "d"        push                      ["a", "b", "c", "d"]
// "."        ignore                    ["a", "b", "c", "d"]
// "."        ignore                    ["a", "b", "c", "d"]
// ".."       remove previous folder    ["a", "b", "c"]

// Finally:

// "/" + stack.join("/")

// becomes:

// "/" + "a/b/c"

// Result:

// /a/b/c
// Why use a stack?

// Consider:

// /a/b/c/..

// When we reach .., we need to return to the previous directory:

// /a/b

// The most recently added directory is c, so we remove it with:

// stack.pop();

// That matches the stack’s Last-In, First-Out behavior.

// What if .. goes beyond the root?

// Example:

// /../../a

// The root / has no parent, so extra .. values are ignored:

// if (stack.length > 0) {
//   stack.pop();
// }

// Result:

// /a
