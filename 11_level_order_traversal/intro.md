Level-order traversal is a method to visit all the nodes in a binary tree level by level. Starting from the root, it explores nodes at the current level before moving on to nodes at the next level. This approach is often implemented using a queue data structure, where nodes are added as they are encountered and processed in the order they were inserted


The Level Order Traversal Pattern (also known as Breadth-First Search or BFS for trees) explores a tree level by level, from top to bottom and left to right.
💡 Core Mechanism
The pattern relies on a Queue (First-In, First-Out) data structure to keep track of nodes at the current level before moving to the next.       
       1          <-- Level 0
     /   \
    2     3       <-- Level 1
   / \   / \
  4   5 6   7     <-- Level 2

Output: [1, 2, 3, 4, 5, 6, 7]



