// Fruits into Baskets: You are visiting a farm to collect fruits. The farm has a single row of fruit trees. You will be given two baskets, and your goal is to pick as many fruits as possible to be placed in the given baskets.

// You will be given an array of characters where each character represents a fruit tree. The farm has following restrictions:

// Each basket can have only one type of fruit. There is no limit to how many fruit a basket can hold.
// You can start with any tree, but you can’t skip a tree once you have started. 1



// This problem is the same as finding the longest contiguous subarray with at most 2 distinct fruit types.

// Since there are only two baskets, the current window can contain no more than two fruit types.

function fruitsIntoBaskets(fruits) {
    let windowStart = 0;
    let maxFruits = 0;
    const frequency = {};
  
    for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
      const rightFruit = fruits[windowEnd];
  
      frequency[rightFruit] = (frequency[rightFruit] || 0) + 1;
  
      // More than two fruit types: shrink from the left
      while (Object.keys(frequency).length > 2) {
        const leftFruit = fruits[windowStart];
  
        frequency[leftFruit]--;
  
        if (frequency[leftFruit] === 0) {
          delete frequency[leftFruit];
        }
  
        windowStart++;
      }
  
      const currentLength = windowEnd - windowStart + 1;
      maxFruits = Math.max(maxFruits, currentLength);
    }
  
    return maxFruits;
}

fruitsIntoBaskets(["A", "B", "C", "A", "C"]);
// 3

// The longest valid section is: ["C", "A", "C"]
// It contains only two fruit types: C and A
// So the answer is 3.

// How it works:

// For: ["A", "B", "C", "A", "C"]

// We first collect: ["A", "B"]

// Both baskets are being used.
// When "C" enters, we now have three fruit types: A, B, C

// That is not allowed, so we remove fruits from the left until only two types remain.