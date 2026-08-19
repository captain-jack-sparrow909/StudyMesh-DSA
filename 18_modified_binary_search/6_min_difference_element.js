// Minimum Difference Element: Given an array of numbers sorted in ascending order, find the element in the array that has the minimum difference with the given ‘key’.

// Example 1:

// Input: [4, 6, 10], key = 7
// Output: 6
// Explanation: The difference between the key '7' and '6' is minimum than any other number in the array 
// Example 2:

// Input: [4, 6, 10], key = 4
// Output: 4

// solution:
// This is another Binary Search problem.

// The main idea is:

// Find the position where key would be inserted, then compare the numbers on the left and right.

// Example
// [4, 6, 10]
// key = 7

// 7 would belong between 6 and 10:

// 4   6   |   10
//         ↑
//         7

// So we only need to compare:

// 6 and 10

// Differences:

// |7 - 6| = 1
// |7 - 10| = 3

// Therefore:

// answer = 6
