// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// user input
const word = prompt('Type a word');

// check the output of the function
if (palindromicWord(word)) {

    console.log(`The word ${word} is palindromic.`);
}
else {

    console.log(`The word ${word} is not palindromic.`);
}

// functions
function palindromicWord(word1) {

    // inizialize variable
    let compareWord = '';

    for (let i = word1.length - 1; i >= 0; i--) {
    
        // add to variable compareWord letter by letter of word1
        compareWord += word1[i];
    }

    // compare between word1 and compareWord
    if (word1 === compareWord) {
    
        return true;
    }

    return false;

}