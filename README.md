# Palidroma

### Testo
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

### Soluzione
- chiedere in input una parola all' utente
- creare una funzione palindromicWord con parametro word1
    - invertire l' input
    - confrontare la parola invertita con quella base
        - SE sono uguali
            - return true
        - ALTRIMENTI
            - return false
- richimare la funzione palindromicWord in un IF
    - SE true
        - stampo è palindroma
    - ALRIMENTI
        - stampo NON è palindroma

# Pari e Dispari

### Testo
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

### Soluzione
- chiedere in input all utent di scegliere tra pari e dispari
- chiedere in input all utent un numero tra 1 e 5
- creo una funzione randNumGenerator per creare un numero random per il computer
    - ritorno un numero random da 1 a 5
- creo una variabile per la somma del numero dell' utente e del computer
- creo una funzione checkSumIsEvenOrOdd con parametro la somma
    - controllo se la somma e pari o dispari
        - SE e pari 
            - ritorno true
        - ALTRIMENTI 
            - ritorno false
- richiamo la funzione checkSumIsEvenOrOdd in un IF
    - SE true
        - stampo è pari
    - SE false
        - stampo è dispari
- controllo chi ha il numero più alto tra l' utente e il computer
    - SE numero user > numero computer
        - stampo user ha vinto
    - SE numero computer > numero user
        - stampo computer ha vinto
    - ALTRIMENTI
        - stampo è un pareggio