Introduction to Modified Binary Search Pattern You are given a sorted array and a target. Find the smallest value that is greater than or equal to the target, which is called its ceiling. [1, 3, 8, 10, 15] target = 12 the ceiling is 15 Plain binary search answers a narrower question. It tells you whether the target is present. When the target is absent it returns nothing useful, and here the absence is the interesting part. You do not need a different algorithm. You need the same one, with two changes. The first change is what you do when the loop ends. Ordinary binary search returns "not found". 
But when start > end, the loop terminates. At this point, the start index points exactly to the smallest element that is greater than or equal to the target.

Here is the complete breakdown of how to modify the standard binary search to find the ceiling of a number.
## The Two Crucial Changes

* The Return Value: Instead of returning -1 when the target is missing, return arr[start].
* The Edge Case: If the target is greater than the largest number in the array, no ceiling exists. You must check this before the loop.

## How the Logic Works

   1. Initialize start = 0 and end = arr.length - 1.
   2. Calculate the middle index: mid = start + (end - start) / 2.
   3. Compare arr[mid] with the target:
   * If arr[mid] == target, you found the exact match. Return arr[mid].
      * If arr[mid] < target, move right: start = mid + 1.
      * If arr[mid] > target, move left: end = mid - 1.
   4. Loop Ends: When start exceeds end, arr[start] holds the next smallest number greater than the target.

## Code Implementation (Python)

def find_ceiling(arr, target):
    # Edge case: target is larger than the maximum element
    if target > arr[-1]:
        return -1 
        
    start, end = 0, len(arr) - 1
    
    while start <= end:
        mid = start + (end - start) // 2
        
        if arr[mid] == target:
            return arr[mid]
        elif arr[mid] < target:
            start = mid + 1
        else:
            end = mid - 1
            
    # When start > end, arr[start] is the ceiling
    return arr[start]
# Example usage:# arr =, target = 12# Returns: 15

## Dry Run with Target = 12

* Iteration 1: start = 0, end = 4, mid = 2. arr[2] = 8. Since 8 < 12, start becomes 3.
* Iteration 2: start = 3, end = 4, mid = 3. arr[3] = 10. Since 10 < 12, start becomes 4.
* Iteration 3: start = 4, end = 4, mid = 4. arr[4] = 15. Since 15 > 12, end becomes 3.
* Loop terminates: start (4) is now greater than end (3).
* Result: arr[start] is arr[4], which equals 15.

If you want to practice more with this pattern, let me know if you would like to:

* See how to find the floor of a number (the largest element smaller than or equal to the target)
* Learn how this applies to letters instead of numbers (e.g., LeetCode 744)
* Solve a mock quiz on modified binary search patterns


