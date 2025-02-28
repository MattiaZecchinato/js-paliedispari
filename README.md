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