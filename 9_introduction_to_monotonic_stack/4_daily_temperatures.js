// Daily Temperatures: Given an array of integers temperatures representing daily temperatures, calculate how many days you have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

// Examples
// Example 1
// Input: temperatures = [70, 73, 75, 71, 69, 72, 76, 73]
// Output: [1, 1, 4, 2, 1, 1, 0, 0]
// Explanation: The first day's temperature is 70 and the next day's temperature is 73 which is warmer. So for the first day, you only have to wait for 1 day to get a warmer temperature


// solution:
// Use a monotonic decreasing stack of indices.
// We store indices rather than temperatures because the answer needs the number of days waited:
// days waited = warmerDayIndex - currentDayIndex

function dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = []; // Stores indices
  
    for (let i = 0; i < temperatures.length; i++) {
      while (
        stack.length > 0 &&
        temperatures[i] > temperatures[stack[stack.length - 1]]
      ) {
        const previousDayIndex = stack.pop();
  
        result[previousDayIndex] = i - previousDayIndex;
      }
  
      stack.push(i);
    }
  
    return result;
}

// Example
// dailyTemperatures([70, 73, 75, 71, 69, 72, 76, 73]);
// // [1, 1, 4, 2, 1, 1, 0, 0]
// Step-by-step
// Index:        0   1   2   3   4   5   6   7
// Temperature: 70  73  75  71  69  72  76  73

// Initially:

// result = [0, 0, 0, 0, 0, 0, 0, 0]
// stack = []
// Day 0: temperature 70

// Nothing is waiting in the stack, so push index 0:

// stack = [0]
//          70
// Day 1: temperature 73

// 73 is warmer than the temperature at the top index:

// 73 > temperatures[0]
// 73 > 70

// Pop index 0:

// result[0] = 1 - 0;
// result = [1, 0, 0, 0, 0, 0, 0, 0]
// stack = [1]
//          73

// Day 0 waits one day.

// Day 2: temperature 75

// 75 > 73, so pop index 1:

// result[1] = 2 - 1;
// result = [1, 1, 0, 0, 0, 0, 0, 0]
// stack = [2]
//          75
// Day 3: temperature 71

// 71 is not warmer than 75, so push its index:

// stack indices:      [2, 3]
// stack temperatures: [75, 71]
// Day 4: temperature 69

// 69 is not warmer than 71:

// stack indices:      [2, 3, 4]
// stack temperatures: [75, 71, 69]
// Day 5: temperature 72

// 72 > 69, so pop index 4:

// result[4] = 5 - 4; // 1

// 72 > 71, so pop index 3:

// result[3] = 5 - 3; // 2

// But 72 is not warmer than 75, so stop and push index 5:

// result = [1, 1, 0, 2, 1, 0, 0, 0]

// stack indices:      [2, 5]
// stack temperatures: [75, 72]
// Day 6: temperature 76

// 76 > 72, so:

// result[5] = 6 - 5; // 1

// 76 > 75, so:

// result[2] = 6 - 2; // 4

// Push index 6:

// result = [1, 1, 4, 2, 1, 1, 0, 0]
// stack = [6]
// Day 7: temperature 73

// 73 is not warmer than 76, so push index 7.

// The remaining days in the stack have no warmer future day, so their answers stay 0.

// Final result:

// [1, 1, 4, 2, 1, 1, 0, 0]
// Why store indices instead of values?

// Suppose day 2 has temperature 75, and day 6 has temperature 76.

// We need:

// 6 - 2; // 4 days

// Temperatures alone cannot tell us the distance between the days, so the stack stores their indices.

// Why is it a decreasing stack?

// The temperatures represented by the stack remain in decreasing order:

// [75, 72]

// When a warmer temperature appears, it resolves all smaller temperatures on top of the stack.
