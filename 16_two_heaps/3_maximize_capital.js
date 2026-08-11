// Maximize Capital: Given a set of investment projects with their respective profits, we need to find the most profitable projects. 
// We are given an initial capital and are allowed to invest only in a fixed number of projects. Our goal is to choose projects that 
// give us the maximum profit. Write a function that returns the maximum total capital after selecting the most profitable projects.


// solution:
// Use two heaps:

// a min-heap by required capital to quickly find projects you can currently afford
// a max-heap by profit to choose the most profitable affordable project

// The process is:

// current capital
//       ↓
// move all affordable projects into max-profit heap
//       ↓
// pick the highest-profit project
//       ↓
// add its profit to capital
//       ↓
// repeat up to k times

// Here’s the solution assuming:

// capital[i] // capital required for project i
// profits[i] // profit from project i


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


function maximizeCapital(capital, profits, initialCapital, k) {
    const minCapitalHeap = new Heap((a, b) => a.capital < b.capital);
    const maxProfitHeap = new Heap((a, b) => a.profit > b.profit);
  
    for (let i = 0; i < capital.length; i++) {
      minCapitalHeap.push({
        capital: capital[i],
        profit: profits[i]
      });
    }
  
    let availableCapital = initialCapital;
  
    for (let i = 0; i < k; i++) {
      // Move every project we can afford
      // into the max-profit heap
      while (
        minCapitalHeap.size() > 0 &&
        minCapitalHeap.peek().capital <= availableCapital
      ) {
        maxProfitHeap.push(minCapitalHeap.pop());
      }
  
      // No affordable projects left
      if (maxProfitHeap.size() === 0) {
        break;
      }
  
      // Pick the most profitable affordable project
      const bestProject = maxProfitHeap.pop();
  
      availableCapital += bestProject.profit;
    }
  
    return availableCapital;
}




// Suppose:

// capital = [0, 1, 2];
// profits = [1, 2, 3];

// initialCapital = 1;
// k = 2;

// Projects are:

// Project 0 → requires 0 → profit 1
// Project 1 → requires 1 → profit 2
// Project 2 → requires 2 → profit 3

// Initially:

// availableCapital = 1

// So we can afford:

// Project 0
// Project 1

// Their profits are:

// 1 and 2

// We want the most profitable, so choose Project 1:

// capital = 1 + 2 = 3

// Now we can also afford Project 2, because:

// required capital = 2
// current capital = 3

// Among the available projects, the largest profit is 3.

// Choose it:

// capital = 3 + 3 = 6

// We have selected k = 2 projects, so the answer is:

// 6

// The important question is: why do we need two heaps?

// The first heap:

// const minCapitalHeap =
//   new Heap((a, b) => a.capital < b.capital);

// puts the project requiring the least capital on top.

// That helps us quickly find:

// Which projects have become affordable?

// Then we move every affordable project into:

// const maxProfitHeap =
//   new Heap((a, b) => a.profit > b.profit);

// That heap answers:

// Of all the projects I can afford right now, which one gives the biggest profit?

// So the roles are:

// minCapitalHeap
// → find affordable projects

// maxProfitHeap
// → choose best affordable project

// The most important loop is:

// while (
//   minCapitalHeap.size() > 0 &&
//   minCapitalHeap.peek().capital <= availableCapital
// ) {
//   maxProfitHeap.push(minCapitalHeap.pop());
// }

// This means:

// Keep moving projects from the capital heap into the profit heap while we can afford them.

// Then:

// const bestProject = maxProfitHeap.pop();

// gets the project with the largest profit.

// And:

// availableCapital += bestProject.profit;

// increases our capital, which may unlock more projects on the next iteration.

// Complexity

// If there are n projects:

// building/inserting heaps: O(n log n)
// choosing up to k projects: about O(k log n)
// overall: O(n log n + k log n)

// The key idea to remember is:

// First filter by what you can afford, then maximize profit among those choices.
