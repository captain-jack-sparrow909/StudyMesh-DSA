Introduction to Sliding Window Pattern
In many problems dealing with an array (or a LinkedList), we are asked to find or calculate something among all the subarrays (or sublists) of a given size. For example, take a look at this problem:

Given an array, find the average of each subarray of ‘K’ contiguous elements in it.

Let's understand this problem with an example:

Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5
Here, we are asked to find the average of all subarrays of '5' contiguous elements in the given array. Let's solve this:

For the first 5 numbers (subarray from index 0-4), the average is: $(1+3+2+6-1)/5 => 2
