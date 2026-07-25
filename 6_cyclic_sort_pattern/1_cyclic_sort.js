// Cyclic Sort: We are given an array containing n objects. Each object, when created, was assigned a unique number from the range 1 to n based on their creation sequence. 
// This means that the object with sequence number 3 was created just before the object with sequence number 4.

// Write a function to sort the objects in-place on their creation sequence number in  without using any extra space. 
// For simplicity, let’s assume we are passed an integer array containing only the sequence numbers, though each number is actually an object.


// solution: 
// Because the array contains every number from 1 to n, each number has a correct index:

// number 1 → index 0
// number 2 → index 1
// number 3 → index 2

// So the correct index of a number is:

// correctIndex = nums[i] - 1;

function cyclicSort(nums) {
    let i = 0;
  
    while (i < nums.length) {
      const correctIndex = nums[i] - 1;
  
      if (nums[i] !== nums[correctIndex]) {
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
      } else {
        i++;
      }
    }
  
    return nums;
}


// Example
// cyclicSort([3, 1, 5, 4, 2]);

// Initial array:

// [3, 1, 5, 4, 2]

// At index 0, the value is 3.

// Its correct index is:

// 3 - 1 = 2

// Swap index 0 with index 2:

// [5, 1, 3, 4, 2]

// Now index 0 contains 5.

// Its correct index is:

// 5 - 1 = 4

// Swap:

// [2, 1, 3, 4, 5]

// Now index 0 contains 2.

// Its correct index is:

// 2 - 1 = 1

// Swap:

// [1, 2, 3, 4, 5]

// Now 1 is at index 0, so move i forward.

// Why don’t we increase i after swapping?

// After a swap, the new number placed at index i may still be in the wrong position.

// So we keep checking the same index until the correct number is there.
