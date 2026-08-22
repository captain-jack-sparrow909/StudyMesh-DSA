Introduction to Top 'K' Elements Pattern You are given an array of numbers and a number K. Return the K largest values. [3, 1, 5, 12, 2, 11] K = 3 gives 5, 11, 12 Sorting the array and taking the last three works, and costs O(N log N). It also produces something you did not ask for: the exact order of all the other numbers. When K is 3 and N is a million, almost all of that work is wasted. What you need is a small structure holding the best K values seen so far. It must also report which of those is the weakest. The weakest matters, because a new arrival has to beat it.

The data structure you are looking for is a Min-Heap.
## Why a Min-Heap Works

* 📦 Tracks size: Keeps exactly $K$ elements.
* 🔝 Root is weakest: Smallest value stays on top.
* ⚡ Fast checks: Comparing new arrivals takes $O(1)$ time.
* 🔄 Efficient updates: Replacing elements takes $O(\log K)$ time.
* ⏱️ Total time: Reduces overall complexity to $O(N \log K)$.

## How the Algorithm Works

   1. Insert first $K$ numbers into heap.
   2. Iterate through the remaining numbers.
   3. Compare current number with heap root.
   4. Discard if current number is smaller.
   5. Replace root if current number is larger.



