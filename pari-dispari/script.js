// gioco del pari o dispari
// svolgimento
  // chiedere all'utente se vuole pari o dispari
  // chiedere all'utente un numero da 1 a 5
  // verificare se il numero inserito è valido (da 1 a 5) o meno
  // far giocare randomicamente il computer scegliendo un numero a caso
  // verificare se i due numeri sono pari o dispari
  // decretare il vincitore o lo sconfitto


// richiesta pari o dispari
var sceltaUtente = prompt('Scegli: Pari o dispari? (scrivi la parola "pari" o "dispari")');
console.log('Hai scelto: ' + sceltaUtente);

// richiesta numero da 1 a 5
var numeroUtente = parseInt(prompt('Inserisci un numero tra 1, 2, 3, 4, 5'));
console.log('Il numero che hai scelto è: ' + numeroUtente);
