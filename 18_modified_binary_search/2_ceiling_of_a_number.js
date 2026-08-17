// Ceiling of a Number: Given an array of numbers sorted in an ascending order, find the ceiling of a given number ‘key’. 
// The ceiling of the ‘key’ will be the smallest element in the given array greater than or equal to the ‘key’.

// Write a function to return the index of the ceiling of the ‘key’. If there isn’t any ceiling return -1.

// Example 1:

// Input: [4, 6, 10], key = 6
// Output: 1


// solution:
// Let's make Ceiling of a Number very simple.

// What does "ceiling" mean?

// The ceiling is:

// The smallest number in the array that is ≥ key.

// Example:

// [4, 6, 10]

// If:

// key = 6

// 6 itself is allowed because:

// 6 >= 6

// So answer is:

// 6 → index 1
// Another example
// [4, 6, 10]
// key = 7

// Numbers ≥ 7 are:

// 10

// So ceiling is 10, index 2.

// Another example
// [4, 6, 10]
// key = 5

// Numbers ≥ 5 are:

// 6, 10

// The smallest one is 6.

// So answer: index 1

