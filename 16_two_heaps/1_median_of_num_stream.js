// Find the Median of a Number Stream: Design a class to calculate the median of a stream of numbers. The class should have the following two methods:

// insertNum(int num): stores the number in the class
// findMedian(): returns the median of all numbers inserted in the class
// If the count of numbers inserted in the class is even, the median will be the average of the two middle numbers.


// solution:

// For this problem, the standard idea is to use two heaps:

// smaller half of numbers | larger half of numbers
//       maxHeap            |      minHeap

// Why two heaps? Because the median always lives in the middle, so we want quick access to:

// the largest number in the smaller half
// the smallest number in the larger half

// For example, if the numbers are:

// 1, 2, 3, 4, 5

// we divide them like:

// maxHeap       minHeap
// [1, 2, 3]     [4, 5]
//       ↑         ↑
//       3         4

// Since there are 5 numbers, the median is 3.

// For:

// 1, 2, 3, 4

// we have:

// maxHeap     minHeap
// [1, 2]      [3, 4]
//      ↑        ↑
//      2        3

// Median:

// (2 + 3) / 2 = 2.5

// JavaScript doesn't have a built-in heap, so here's a small heap implementation:




class Heap {
    constructor(compare) {
      this.heap = [];
      this.compare = compare;
    }
  
    size() {
      return this.heap.length;
    }
  
    peek() {
      return this.heap[0];
    }
  
    push(num) {
        // the number goes to the end first
        // get the index after addition, and get parent index
        // then we compare child value with parent value:
        // For a max heap, the comparison function is: (a, b) => a > b
        // if the condition fails we break the loop otherwise we swap the parent and the new value

        // summary: item added to the last and moved up according to comparison function by comparing 
        // child value to parent value until parent value is greater than child value then we break the loop
      this.heap.push(num);
  
      let index = this.heap.length - 1;
  
      while (index > 0) {
        const parent = Math.floor((index - 1) / 2);
  
        if (!this.compare(this.heap[index], this.heap[parent])) {  // max heap: (a, b) => a > b; since item pushed to last, for binary tree greater element should be parent
            // this.heap[index] -> 9 & this.heap[parent] -> 8; !(9 > 8) but 9 > 8 so this if condition won't execute
            // for max-heap: this.compare(7, 10) would become true -> !false == true
          break;
        }
  
        [this.heap[index], this.heap[parent]] =
          [this.heap[parent], this.heap[index]];
  
        index = parent;
      }
    }
  
    pop() {
        // get the top value
        // pop and get the last value
        // first push the last value at the 0th index of heap
        // define and initialize index with 0 value as it points to the last value added above
        // then we define best, left and right, all 3 are indexes not values
        // then we make comparison of best with left and right according to comparison function and assign to best, 
        // then we check if best has become equal to index, if yes then break the loop, it means best is already at correct place according to max or min heap
        // if index and best aren't same we swap values and assign best index to the index


        // summary: create a reference to top value and move last value to top index and then move it downward by comparing with left and right child in comparison 
        // function until best-index equals index.
      const top = this.heap[0];
      const last = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = last;
  
        let index = 0;
  
        while (true) {
          let best = index;
          const left = index * 2 + 1;
          const right = index * 2 + 2;
  
          if (
            left < this.heap.length &&
            this.compare(this.heap[left], this.heap[best])
          ) {
            best = left;
          }
  
          if (
            right < this.heap.length &&
            this.compare(this.heap[right], this.heap[best])
          ) {
            best = right;
          }
  
          if (best === index) {
            break;
          }
  
          [this.heap[index], this.heap[best]] =
            [this.heap[best], this.heap[index]];
  
          index = best;
        }
      }
  
      return top;
    }
  }



// ========== understand push and pop methods ==================
// The important thing is that a heap is stored as an array, but we pretend it is a binary tree.

// For example:

// [10, 7, 8, 2, 3]

// represents:

//         10
//        /  \
//       7    8
//      / \
//     2   3

// For an element at index i:

// parent = Math.floor((i - 1) / 2);

// leftChild = i * 2 + 1;
// rightChild = i * 2 + 2;

// Now let's understand push() first.

// push(num) {
//   this.heap.push(num);

//   let index = this.heap.length - 1;

//   while (index > 0) {
//     const parent = Math.floor((index - 1) / 2);

//     if (!this.compare(this.heap[index], this.heap[parent])) {
//       break;
//     }

//     [this.heap[index], this.heap[parent]] =
//       [this.heap[parent], this.heap[index]];

//     index = parent;
//   }
// }

// Suppose this is a max heap:

// this.heap = [10, 7, 8, 2, 3]

// and we insert:

// push(9)

// First:

// this.heap.push(9);

// Now:

// [10, 7, 8, 2, 3, 9]

// Tree:

//         10
//        /  \
//       7    8
//      / \  /
//     2  3 9

// The new number always goes at the end first.

// Then:

// let index = this.heap.length - 1;

// So:

// index = 5

// Now find its parent:

// const parent = Math.floor((index - 1) / 2);

// For index 5:

// parent = floor((5 - 1) / 2)
//        = floor(4 / 2)
//        = 2

// At index 2 we have:

// 8

// So we're comparing:

// 9 with 8

// For a max heap, the comparison function is:

// (a, b) => a > b

// So:

// this.compare(9, 8)

// is:

// true

// That means 9 should be above 8.

// So we swap:

// [this.heap[index], this.heap[parent]] =
//   [this.heap[parent], this.heap[index]];

// Now:

// [10, 7, 9, 2, 3, 8]

// Tree:

//         10
//        /  \
//       7    9
//      / \  /
//     2  3 8

// Then:

// index = parent;

// So now:

// index = 2

// We compare 9 with its new parent 10.

// 9 > 10 ? false

// So:

// break;

// Done.

// So push() means:

// add at the end
//       ↓
// compare with parent
//       ↓
// if it should be above parent, swap
//       ↓
// keep moving upward

// This process is often called bubble up or heapify up.

// Now pop().

// pop() {
//   const top = this.heap[0];
//   const last = this.heap.pop();

//   if (this.heap.length > 0) {
//     this.heap[0] = last;

//     let index = 0;

//     while (true) {
//       let best = index;
//       const left = index * 2 + 1;
//       const right = index * 2 + 2;

//       if (
//         left < this.heap.length &&
//         this.compare(this.heap[left], this.heap[best])
//       ) {
//         best = left;
//       }

//       if (
//         right < this.heap.length &&
//         this.compare(this.heap[right], this.heap[best])
//       ) {
//         best = right;
//       }

//       if (best === index) {
//         break;
//       }

//       [this.heap[index], this.heap[best]] =
//         [this.heap[best], this.heap[index]];

//       index = best;
//     }
//   }

//   return top;
// }

// Suppose:

// this.heap = [10, 7, 9, 2, 3, 8]

// Tree:

//         10
//        /  \
//       7    9
//      / \  /
//     2  3 8

// In a max heap, pop() removes the biggest value:

// 10

// First:

// const top = this.heap[0];

// So:

// top = 10

// Then:

// const last = this.heap.pop();

// This removes:

// 8

// Now the array temporarily becomes:

// [10, 7, 9, 2, 3]

// We then put 8 at the root:

// this.heap[0] = last;

// Now:

// [8, 7, 9, 2, 3]

// Tree:

//         8
//        / \
//       7   9
//      / \
//     2   3

// But this is wrong for a max heap because:

// 9 > 8

// and the biggest value should be above.

// So now we move 8 downward.

// Start:

// let index = 0;

// Calculate children:

// left = 0 * 2 + 1;  // 1
// right = 0 * 2 + 2; // 2

// So:

// index 0 = 8
// left  1 = 7
// right 2 = 9

// We want the best value among:

// 8, 7, 9

// For a max heap, best means the biggest.

// So eventually:

// best = 2

// because index 2 contains 9.

// Then:

// if (best === index) {
//   break;
// }

// But:

// best = 2
// index = 0

// so not equal.

// Swap:

// 8 ↔ 9

// Array becomes:

// [9, 7, 8, 2, 3]

// Tree:

//         9
//        / \
//       7   8
//      / \
//     2   3

// Now the heap is correct again.

// Then:

// return top;

// returns:

// 10

// So pop() means:

// save root
//    ↓
// remove last element
//    ↓
// put last element at root
//    ↓
// compare with children
//    ↓
// swap with better child
//    ↓
// keep moving downward
//    ↓
// return old root

// This is called bubble down or heapify down.

// The key difference is:

// push()
// → new item starts at bottom
// → moves UP

// pop()
// → last item moves to top
// → moves DOWN

// And compare decides whether it behaves as a max heap or min heap.

// For max heap:

// (a, b) => a > b

// means:

// a should come before b if a is bigger.

// For min heap:

// (a, b) => a < b

// means:

// a should come before b if a is smaller.

// So the same push() and pop() code works for both heap types.



class MedianOfAStream {
    constructor() {
      // smaller half: largest number should be on top
      this.maxHeap = new Heap((a, b) => a > b);
  
      // larger half: smallest number should be on top
      this.minHeap = new Heap((a, b) => a < b);
    }
  
    insertNum(num) {
      // Put number into the correct half
      if (
        this.maxHeap.size() === 0 ||
        num <= this.maxHeap.peek()
      ) {
        this.maxHeap.push(num);
      } else {
        this.minHeap.push(num);
      }
  
      // Balance the two heaps
      if (this.maxHeap.size() > this.minHeap.size() + 1) {
        this.minHeap.push(this.maxHeap.pop());
      }
  
      if (this.minHeap.size() > this.maxHeap.size()) {
        this.maxHeap.push(this.minHeap.pop());
      }
    }
  
    findMedian() {
      // Even number of elements
      if (this.maxHeap.size() === this.minHeap.size()) {
        return (
          this.maxHeap.peek() +
          this.minHeap.peek()
        ) / 2;
      }
  
      // Odd number of elements
      return this.maxHeap.peek();
    }
}


// The important part is not really the heap implementation. Focus on these two methods.

// Suppose we insert:

// 3, 1, 5, 4

// Initially:

// maxHeap = []
// minHeap = []

// Insert 3. Since maxHeap is empty:

// maxHeap = [3]
// minHeap = []

// Median:

// 3

// Now insert 1.

// Since:

// 1 <= maxHeap top (3)

// put it in maxHeap:

// maxHeap = [3, 1]
// minHeap = []

// But maxHeap is now too large, so move its biggest element to minHeap:

// maxHeap = [1]
// minHeap = [3]

// Median:

// (1 + 3) / 2 = 2

// Now insert 5.

// Since:

// 5 > maxHeap top (1)

// put it in minHeap:

// maxHeap = [1]
// minHeap = [3, 5]

// But we want maxHeap to have either the same number of elements or one extra.

// So move the smallest value from minHeap to maxHeap:

// maxHeap = [3, 1]
// minHeap = [5]

// The median is:

// 3

// Now insert 4:

// 4 > maxHeap top (3)

// So:

// maxHeap = [3, 1]
// minHeap = [4, 5]

// There are 4 numbers, so take the two middle values:

// maxHeap top = 3
// minHeap top = 4

// Median:

// (3 + 4) / 2 = 3.5

// The most important rules to remember are:

// maxHeap
// → smaller half
// → gives us the biggest number from that half

// minHeap
// → larger half
// → gives us the smallest number from that half

// And we always keep their sizes like:

// same size

// OR

// maxHeap has exactly 1 extra element

// Therefore:

// if (maxHeap.size() === minHeap.size())

// the total count is even, so:

// (maxHeap.peek() + minHeap.peek()) / 2

// Otherwise the total count is odd, and the extra middle number is:

// maxHeap.peek()