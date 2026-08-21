Introduction to Bitwise XOR Pattern Every number in an array appears exactly twice, except one that appears once. Find the number that appears once. [1, 4, 2, 1, 3, 2, 3] the answer is 4 A hash map of counts solves this in one pass and O(N) memory. Sorting solves it in O(N log N). Both work, and both are more than the question needs. The exclusive or operator, written ^ or XOR, compares two numbers bit by bit. It returns a 1 in each position where the two bits differ, and a 0 where they are the same. 
That gives three properties worth memorising: 

   1. a ^ a = 0 — A number XORed with itself cancels out.
   2. a ^ 0 = a — Any number XORed with zero remains unchanged.
   3. a ^ b ^ a = (a ^ a) ^ b = 0 ^ b = b — XOR is commutative and associative, meaning the order of operations does not matter.

## How it applies to your example
When you XOR all the numbers in the array [1, 4, 2, 1, 3, 2, 3] together, the order rearranges itself automatically:
$$\text{Result} = 1 \oplus 4 \oplus 2 \oplus 1 \oplus 3 \oplus 2 \oplus 3$$ 
$$\text{Result} = (1 \oplus 1) \oplus (2 \oplus 2) \oplus (3 \oplus 3) \oplus 4$$ 
$$\text{Result} = 0 \oplus 0 \oplus 0 \oplus 4$$ 
$$\text{Result} = 4$$ 
## The Code (Python)

def find_single_number(nums):
    result = 0
    for num in nums:
        result ^= num
    return result

This approach achieves an optimal O(N) time complexity while using only O(1) memory, completely eliminating the need for a hash map or sorting.
Would you like to see how to apply the XOR pattern to more advanced problems, like finding two unique numbers in an array where everything else repeats twice?

