// A happy number repeatedly replaces itself with the sum of the squares of its digits. until it reaches 1.

// Example for 19:
// 1² + 9² = 82
// 8² + 2² = 68
// 6² + 8² = 100
// 1² + 0² + 0² = 1

// So 19 is a happy number.

// We can use the slow and fast pointer technique to detect whether the sequence reaches 1 or gets stuck in a cycle.

const isHappyNumber = (n) => {
    let slow = n;
    let fast = n;

    do {
        slow = getSquared(n);
        fast = getSquared(getSquared(n))
    } while (slow !== fast)   //this condition gets true when there's cycle, if it's a non-happy number and also for 1

    //19 → 82 → 68 → 100 → 1 → 1 ...
    // Eventually: slow = 1; fast = 1

    return slow === 1;
}

const getSquared = (n) => {
    let sum = 0;
    while (n>0) {
        const digit = n % 10;  //if n is 19, it'll give us 9
        sum += digit * digit;  //81 will get stored on first run if n is 19;
        n = Math.floor(n/10);  //to get the 1 if n is 19
    }
    return sum;
}