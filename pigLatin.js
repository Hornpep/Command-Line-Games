// nimmt Eingabe und wandelt die Elemente aus dem Array in einen String um
const phrase = process.argv.slice(2).join(' ');

// übersetzt die Wörter, je nachdem wie sie beginnen
const translateWord = (word) => {
    const vowels = 'aeiouAEIOU';

    if (vowels.includes(word[0])) {
        // wenn das Wort mit einem Vokal beginnt
        return word + 'way';
    } else if (!vowels.includes(word[0]) && vowels.includes(word[1])) {
        // wenn das Wort mit einem Konsonanten und einem Vokal beginnt
        return word.slice(1) + word[0] + 'ay';
    } else {
        // wenn das Wort mit zwei Konsonanten beginnt
        return word.slice(2) + word.slice(0, 2) + 'ay';
    }
};

// teilt die Wörter auf, übersetzt diese und setzt die Wörter wieder zusammen
const translateToPigLatin = (phrase) => phrase.split(' ').map(translateWord).join(' ');

// Ausgabe
console.log(translateToPigLatin(phrase));

