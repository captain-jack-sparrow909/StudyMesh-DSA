// Bus Routes: You are given an array routes where routes[i] is the list of bus stops that the ithe bus travels in a cyclic manner. 
// For example, if routes[0] = [2, 3, 7], it means that bus 0 travels through the stops 2 -> 3 -> 7 -> 2 -> 3 -> 7 ... and then repeats this sequence indefinitely.
// You start at a bus stop called source and wish to travel to a bus stop called target using the bus routes. 
// You can switch buses at any bus stop that is common to the routes of two buses. Return the minimum number of buses you need to take to travel from source to target.


// solution:
// Use BFS, but think of the BFS levels as number of buses taken, not number of stops visited.
// The key idea is to first map each bus stop to the buses that visit it.

function numBusesToDestination(routes, source, target) {
    if (source === target) {
      return 0;
    }
  
    const stopToBuses = new Map();
  
    // Build: stop -> buses that visit this stop
    for (let bus = 0; bus < routes.length; bus++) {
      for (const stop of routes[bus]) {
        if (!stopToBuses.has(stop)) {
          stopToBuses.set(stop, []);
        }
  
        stopToBuses.get(stop).push(bus);
      }
    }
  
    const queue = [source];
    const visitedStops = new Set([source]);
    const visitedBuses = new Set();
  
    let busesTaken = 0;
  
    while (queue.length > 0) {
      const levelSize = queue.length;
  
      // Taking one more bus
      busesTaken++;
  
      for (let i = 0; i < levelSize; i++) {
        const currentStop = queue.shift();
  
        const buses = stopToBuses.get(currentStop) || [];
  
        for (const bus of buses) {
          if (visitedBuses.has(bus)) {
            continue;
          }
  
          visitedBuses.add(bus);
  
          // Once we take this bus, we can reach every stop on its route
          for (const nextStop of routes[bus]) {
            if (nextStop === target) {
              return busesTaken;
            }
  
            if (!visitedStops.has(nextStop)) {
              visitedStops.add(nextStop);
              queue.push(nextStop);
            }
          }
        }
      }
    }
  
    return -1;
}


// For example:

// const routes = [
//   [1, 2, 7],
//   [3, 6, 7]
// ];

// console.log(numBusesToDestination(routes, 1, 6));
// // 2

// The routes are:

// Bus 0: 1 → 2 → 7 → ...
// Bus 1: 3 → 6 → 7 → ...

// You start at:

// source = 1
// target = 6

// You can take:

// Bus 0:
// 1 → 2 → 7

// At stop 7, both buses are available, so switch to Bus 1:

// Bus 1:
// 7 → 3 → 6

// So:

// Bus 0 + Bus 1 = 2 buses

// Therefore the answer is:

// 2

// The most important part is this mapping:

// stopToBuses

// For the example, it becomes roughly:

// 1 -> [0]
// 2 -> [0]
// 7 -> [0, 1]
// 3 -> [1]
// 6 -> [1]

// So when we arrive at stop 7, we immediately know:

// Which buses can I take from stop 7?

// Bus 0
// Bus 1

// That is how we discover bus transfers.

// Also notice why we have both:

// visitedStops
// visitedBuses

// visitedStops prevents us from repeatedly adding the same stop.

// visitedBuses prevents us from repeatedly exploring the same entire bus route.

// The BFS levels represent buses:

// Level 1 → stops reachable using 1 bus
// Level 2 → stops reachable using 2 buses
// Level 3 → stops reachable using 3 buses
// ...

// That's why:

// busesTaken++;

// happens once per BFS level.




// of this routes is the 1, 2, 7, 3, 6 the number for bus or bus stop ?

// 1, 2, 7, 3, 6 are bus stop numbers, not bus numbers.

// In:

// const routes = [
//   [1, 2, 7],
//   [3, 6, 7]
// ];

// the index of each inner array is the bus number:

// routes[0] = [1, 2, 7]
// Bus 0 visits stops 1, 2, and 7

// routes[1] = [3, 6, 7]
// Bus 1 visits stops 3, 6, and 7

// So you can read it as:

// Bus 0: 1 → 2 → 7 → 1 → 2 → 7 ...

// Bus 1: 3 → 6 → 7 → 3 → 6 → 7 ...

// The common stop is 7, so you can transfer buses there:

// Bus 0 reaches stop 7
//         ↓
// switch buses
//         ↓
// Bus 1 also visits stop 7

// So if:

// source = 1;
// target = 6;

// you travel:

// Stop 1
//   ↓ take Bus 0
// Stop 7
//   ↓ switch to Bus 1
// Stop 6

// You took 2 buses.

// A simple rule:

// routes[index]  → bus number

// values inside routes[index] → bus stop numbers

// So:

// routes[0] // Bus 0

// and:

// routes[0][1] // stop 2
