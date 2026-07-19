// Sqrt: Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

//we use binary search, as the possible answer lies between 0 and x

const mySqrt = (x) => {   //let x = 8
    if (x < 2) {
        return x
    }

    let left = 0;
    let right = Math.floor(x/2)    //right = 4
    let result = 0;

    while (left < right) {   //third turn -> left = 3, right = 2, and saved answer is 2 so 2 returns
        
        const mid = Math.floor((left + right)/2);  //first turn -> mid = 2, //second turn -> 3
        const square = mid * mid;    //first turn -> 4;  //second turn -> 9

        if (square === x) {
            return mid;
        }

        if (square < x) {  //first turn -> 4 < 8;     //second turn -> 9 < 8 go to else block
            answer = mid;  //first turn -> 2
            left = mid + 1; //first turn -> 3
        } else {
            right = mid - 1;   //second turn -> 2
        }
    }

    return result;
}

