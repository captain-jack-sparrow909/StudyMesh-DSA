// Intervals Intersection: Given two lists of intervals, find the intersection of these two lists. 
// Each list consists of disjoint intervals sorted on their start time.

//solution:
// Use two pointers, one for each interval list.

// For every pair of intervals, check whether they overlap. If they do, their intersection is:

// start = maximum of both starts
// end = minimum of both ends

function intervalIntersection(list1, list2) {
    const result = [];
  
    let i = 0;
    let j = 0;
  
    while (i < list1.length && j < list2.length) {
      const start = Math.max(list1[i][0], list2[j][0]);
      const end = Math.min(list1[i][1], list2[j][1]);
  
      // An overlap exists
      if (start <= end) {
        result.push([start, end]);
      }
  
      // Move the interval that ends first
      if (list1[i][1] < list2[j][1]) {
        i++;
      } else {
        j++;
      }
    }
  
    return result;
}

// Example
// intervalIntersection(
//   [
//     [1, 3],
//     [5, 6],
//     [7, 9]
//   ],
//   [
//     [2, 3],
//     [5, 7]
//   ]
// );

// Output:

// [
//   [2, 3],
//   [5, 6],
//   [7, 7]
// ]
// Step by step

// Compare:

// [1, 3] and [2, 3]

// Intersection:

// start = max(1, 2) = 2
// end = min(3, 3) = 3

// So:

// [2, 3]

// Both end at 3; the code moves j.

// Next compare:

// [1, 3] and [5, 7]

// Here:

// start = 5
// end = 3

// Since start > end, there is no overlap.

// [1, 3] ends first, so move i.

// Next:

// [5, 6] and [5, 7]

// Intersection:

// [5, 6]

// [5, 6] ends first, so move i.

// Next:

// [7, 9] and [5, 7]

// Intersection:

// [7, 7]

// A single point is also a valid intersection.

// Why move the interval that ends first?

// Suppose:

// [5, 6] and [5, 7]

// [5, 6] cannot overlap with any later part of [5, 7] because it has already ended. So we move to the next interval in the first list.





// why start is max of both and end is min of both ?

// Because the intersection is only the part covered by both intervals.

// Example:

// Interval A: [1, 6]
// Interval B: [3, 8]

// Visualize them:

// A:  1 -------- 6
// B:      3 -------- 8
//         |------|
//         overlap

// The shared part starts at 3 and ends at 6.

// Why the start uses Math.max()

// The intersection cannot begin until both intervals have started.

// A starts at 1
// B starts at 3

// Between 1 and 3, only interval A exists. The shared part begins at the later start:

// const start = Math.max(1, 3); // 3
// Why the end uses Math.min()

// The intersection stops as soon as either interval ends.

// A ends at 6
// B ends at 8

// After 6, only interval B continues. Therefore, the shared part ends at the earlier end:

// const end = Math.min(6, 8); // 6

// So the intersection is:

// [3, 6]
// Another example
// A = [5, 10]
// B = [7, 8]

// Here, B is completely inside A:

// start = Math.max(5, 7);  // 7
// end = Math.min(10, 8);   // 8

// Intersection:

// [7, 8]
// What if there is no intersection?
// A = [1, 3]
// B = [5, 7]

// Calculate:

// start = Math.max(1, 5); // 5
// end = Math.min(3, 7);   // 3

// We get:

// start = 5
// end = 3

// Since:

// start > end

// the intervals do not overlap.

// That is why the code checks:

// if (start <= end) {
//   result.push([start, end]);
// }

// The rule is:

// Intersection start = later starting point
// Intersection end   = earlier ending point
