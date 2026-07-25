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