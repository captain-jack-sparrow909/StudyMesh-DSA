// Reverse Level Order Traversal: Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. 
// (i.e., the lowest level comes first in left to right order.)

// Examples
// Example 1
// Input: root = [1, 2, 3, 4, 5, 6, 7]
// Expected Output: [[4, 5, 6, 7], [2, 3], [1]]

// solution: 
// Use Breadth-First Search (BFS) with a queue.
// Normal level-order traversal gives:
// [[1], [2, 3], [4, 5, 6, 7]]
// Since we need bottom-up order, add each level to the front of the result.

