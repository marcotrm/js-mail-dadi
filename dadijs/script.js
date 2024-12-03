// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

// Genera un numero casuale per il giocatore
const userNut = Math.floor(Math.random() * 6) + 1;

// Genera un numero casuale per il computer
const computerNut = Math.floor(Math.random() * 6) + 1;

// risultati 
console.log(`Giocatore ha tirato: ${userNut}`);
console.log(`Computer ha tirato: ${computerNut}`);

// vincitore
if (userNut > computerNut) {
    alert("user win")
    console.log("user win");
} else if (computerNut > userNut) {
    alert("computer win")
    console.log("computer win");
} else {
    alert("draw")
    console.log("pareggio!");
}