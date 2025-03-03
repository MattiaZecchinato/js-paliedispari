// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// user input even or odd
const evenOrOdd  = prompt('Type a word between \'odd\' or \'even\'');
// user input between 1 and 5
const userNum = parseInt(prompt('Type a number between 1 and 5'));

console.log(`User number is: ${userNum}`);

let computerNum = randNumGenerator();
console.log(`Computer number is: ${computerNum}`);

let sum = userNum + computerNum;
console.log(`The sum is: ${sum}`);

// check the winner between user and computer
if (checkSumIsEvenOrOdd(sum) === evenOrOdd) {

    console.log('User win!');
}
else {

    console.log('Computer win!');
}

// functions
function randNumGenerator() {

    return Math.ceil(Math.random() * 5);
}

function checkSumIsEvenOrOdd(sum1) {

    if (sum1 % 2 === 0) {

        return 'even';
    }
    return 'odd';
}