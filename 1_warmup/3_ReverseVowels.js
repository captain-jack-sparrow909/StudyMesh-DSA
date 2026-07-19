//Reverse Vowels, Given a string s, reverse only all the vowels in the string and return it.
//Use the two-pointer technique
function reverseVowels(s) {
    const vowels = new Set([
        'a', 'e', 'i', 'o', 'u',
        'A', 'E', 'I', 'O', 'U'
    ])

    const chars = s.split('')

    let left = 0;
    let right = chars.length-1;

    while (left < right) {
        //move left until it founds a vowel:
        while (left < right && !vowels.has(chars[i])) {
            left++;
        }

        //move right until it founds a vowel:
        while (right > left && !vowels.has(chars[right])) {
            right--;
        }

        //swap the vowels:
        [chars[left], chars[right]] = [chars[right], chars[left]]

        left++;
        right--;
    }

    return chars.join("");
}

