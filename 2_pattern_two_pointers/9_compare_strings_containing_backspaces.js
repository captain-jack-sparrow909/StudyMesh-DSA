// Use two pointers starting from the end of both strings.

// Why from the end? Because # removes the character before it, so scanning backward lets us skip deleted characters without building new strings.

const getNextValidIndex = (str, ind) => {
    let backspaces = 0;
    while (ind >=0) {
        if (str[ind] === '#'){
            backspaces += 1;
        } else if (backspaces > 0) {
            backspaces--;
        } else {
            break;
        }
        ind--;
    }
    return ind;
}

const compareStrings = (str1, str2) => {
    let i = str1.length - 1;
    let j = str2.length - 1;

    while(i >= 0 || j >=0){

        i = getNextValidIndex(str1, i)
        j = getNextValidIndex(str2, j)

        //both sides are finished:
        if (i<0 && j<0) {
            return true;
        }

        //if either string isn't finished, then false:
        if (i < 0 || j < 0) {
            return false;
        }

        // or if value at that index is different:
        if (str1[i] !== str2[j]) {
            return false;
        }

        i--;
        j--;
    }
    return true;
}
