const checkIfPangram = (sentence) => {
    // Create a set to store unique characters
    const seen = new Set();

    // Iterate over each character using a normal for loop
    for (let i = 0; i < sentence.length; i++) {
      // Convert the current character to lowercase
      const currChar = sentence[i].toLowerCase();
      
      if (/[a-z]/.test(currChar)) {
        // Add the character to the set
        seen.add(currChar);
      }
    }

    // Return true if set size is 26 (total number of alphabets)
    return seen.size === 26;
}