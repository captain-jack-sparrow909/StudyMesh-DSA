function minDistance(word1, word2, words) {
    let position1 = -1;
    let position2 = -1;
    let minimumDistance = Infinity;

    for(let i=0; i<words.lenght; i++){
        if (words[i] === word1) {
            position1 = i
        }

        if (words[i] === word2) {
            position2 = i;
        }

        if (position1 !== -1 && position2 !== -1) {
            minimumDistance = Math.min(
                minimumDistance,
                Math.abs(position1 - position2)
            )
        }
    }
    
    return minimumDistance;
}