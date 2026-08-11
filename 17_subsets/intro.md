You are given a set of distinct numbers. Produce every possible subset.

[1, 5, 3]  gives  [], [1], [5], [1,5], [3], [1,3], [5,3], [1,5,3]
Three numbers give eight subsets, because each number is either in or out and 2 × 2 × 2 = 8. Writing eight by hand is fine. Writing 2^n by hand is not, so you need a rule that generates them.

Here is the rule. Start with a list holding just the empty subset. Then take the numbers one at a time, and for each number, copy every subset you already have and add the
number to each copy.
