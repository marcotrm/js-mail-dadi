// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.
// NON POTETE UTILIZZARE NESSUN METODO COME:
// - includes
// - indexOf
// - find
// - search
// - ecc...

// Lista di email
const emails = ["marco@example.com", "fede@example.com", "franco@example.com"];

// Chiedi l'email all'utente
const userEmail = prompt("Inserisci la tua email:");

let autorize = false;

// ciclo per il controllo
for (let i = 0; i < emails.length; i++) {
    if (emails[i] === userEmail) {
        autorize = true;
    }
}

// alert in base al risultato
if (autorize) {
    alert("Benvenuto!");
    console.log("Benvenuto!");

} else {
    alert("AL'email non è nella lista.");
    console.log("L'email non è nella lista.");
}
