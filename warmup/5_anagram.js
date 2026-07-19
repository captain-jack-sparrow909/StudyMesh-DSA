//Anagram is a word formed by rearranging the letters of another word:

//JavaScript solution using a frequency map

const isAnagram = (s, t) => {
    if (s.length !== t.length) {
        return false;
    }

    let count = {}

    for (const char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (const char of t) {
        if (!count[char]) {
            return false;
        }
        count[char]--;
    }

    return true;
}