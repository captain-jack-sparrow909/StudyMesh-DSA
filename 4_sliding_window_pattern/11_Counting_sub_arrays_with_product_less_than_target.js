// Counting Subarrays with Product Less than a Target: Given an array nums with positive numbers and a positive integer target, 
// return the count of contiguous subarrays whose product is less than the target number.

// solution:
// Use a sliding window because all numbers are positive.

// Keep multiplying numbers as the window expands. If the product becomes too large, 
// remove numbers from the left until the product is smaller than target again.

function countSubarrays(nums, target) {
    if (target <= 1) {
      return 0;
    }
  
    let product = 1;
    let windowStart = 0;
    let count = 0;
  
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
      product *= nums[windowEnd];
  
      while (product >= target) {
        product /= nums[windowStart];
        windowStart++;
      }
  
      count += windowEnd - windowStart + 1;
    }
  
    return count;
  }



  
//   Step 1: Add 2

//   Current window:
  
//   [2]
  
//   Product:
  
//   2
  
//   Valid subarrays ending at this position:
  
//   [2]
  
//   Count added:
  
//   1
  
//   Total count:
  
//   1
//   Step 2: Add 5
  
//   Current window:
  
//   [2, 5]
  
//   Product:
  
//   10
  
//   Valid subarrays ending at 5:
  
//   [5]
//   [2, 5]
  
//   Count added:
  
//   2
  
//   Total count:
  
//   3
//   Step 3: Add 3
  
//   Current window:
  
//   [2, 5, 3]
  
//   Product:
  
//   30
  
//   But the product must be strictly less than 30, so shrink from the left.
  
//   Remove 2:
  
//   product = 30 / 2 = 15
  
//   New window:
  
//   [5, 3]
  
//   Valid subarrays ending at 3:
  
//   [3]
//   [5, 3]
  
//   Count added:
  
//   2
  
//   Total count:
  
//   5
//   Step 4: Add 10
  
//   Current product:
  
//   15 × 10 = 150
  
//   Too large, so shrink.
  
//   Remove 5:
  
//   150 / 5 = 30
  
//   Still not less than 30.
  
//   Remove 3:
  
//   30 / 3 = 10
  
//   Now the window is:
  
//   [10]
  
//   Valid subarrays ending at 10:
  
//   [10]
  
//   Count added:
  
//   1
  
//   Final count:
  
//   6
  
//   The valid subarrays are:
  
//   [2]
//   [5]
//   [2, 5]
//   [3]
//   [5, 3]
//   [10]
//   Why this formula?
//   count += windowEnd - windowStart + 1;
  
//   After shrinking, every subarray ending at windowEnd and starting anywhere from windowStart to windowEnd is valid.
  
//   For example:
  
//   windowStart = 1
//   windowEnd = 3
  
//   Possible valid subarrays ending at index 3 are:
  
//   indices 3 to 3
//   indices 2 to 3
//   indices 1 to 3
  
//   There are:
  
//   3 - 1 + 1 = 3
