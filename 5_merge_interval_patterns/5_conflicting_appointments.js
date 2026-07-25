// Conflicting Appointments: Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

// solution: 
// Conflicting Appointments: Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

function canAttendAllAppointments(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
  
    for (let i = 1; i < intervals.length; i++) {
      const previousEnd = intervals[i - 1][1];
      const currentStart = intervals[i][0];
  
      if (currentStart < previousEnd) {
        return false;
      }
    }
  
    return true;
}
