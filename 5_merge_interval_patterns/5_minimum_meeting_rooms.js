// Minimum Meeting Rooms: Given a list of intervals representing the start and end time of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.

// solution: 
// We need to find the maximum number of meetings happening at the same time. That number is the minimum rooms required.

// A simple approach is:

// Put all start times in one array.
// Put all end times in another array.
// Sort both arrays.
// Use two pointers to track how many rooms are currently being used.

function minimumMeetingRooms(meetings) {
    if (meetings.length === 0) {
      return 0;
    }
  
    const startTimes = [];
    const endTimes = [];
  
    for (const [start, end] of meetings) {
      startTimes.push(start);
      endTimes.push(end);
    }
  
    startTimes.sort((a, b) => a - b);
    endTimes.sort((a, b) => a - b);
  
    let startPointer = 0;
    let endPointer = 0;
  
    let roomsInUse = 0;
    let maxRooms = 0;
  
    while (startPointer < meetings.length) {
      if (startTimes[startPointer] < endTimes[endPointer]) {
        // A meeting starts before the earliest meeting ends
        roomsInUse++;
        maxRooms = Math.max(maxRooms, roomsInUse);
        startPointer++;
      } else {
        // A meeting has ended, so its room becomes free
        roomsInUse--;
        endPointer++;
      }
    }
  
    return maxRooms;
  }


// Example
// minimumMeetingRooms([
//     [1, 4],
//     [2, 5],
//     [7, 9]
//   ]);
//   // 2
  
//   Sorted times:
  
//   Starts: [1, 2, 7]
//   Ends:   [4, 5, 9]
  
//   Step by step:
  
//   Start 1 < End 4
//   Meeting starts → roomsInUse = 1
  
//   Start 2 < End 4
//   Another meeting starts → roomsInUse = 2
  
//   Start 7 >= End 4
//   First meeting ends → roomsInUse = 1
  
//   Start 7 >= End 5
//   Second meeting ends → roomsInUse = 0
  
//   Start 7 < End 9
//   Meeting starts → roomsInUse = 1
  
//   The maximum number of rooms used at once was:
  
//   2
//   Why use < and not <=?
  
//   For meetings:
  
//   [1, 4] and [4, 6]
  
//   The first meeting ends exactly when the second starts, so they can use the same room.
  
//   When:
  
//   startTimes[startPointer] === endTimes[endPointer]
  
//   we process the ending first and free the room.
