//Approach 1: Brute Force
const containsDuplicate = (nums) => {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) { // if any two elements are the same, return true
            return true;
        }
      }
    }
    return false; // if no duplicates are found, return false
}
