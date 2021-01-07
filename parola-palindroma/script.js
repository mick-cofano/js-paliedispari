// Svolgimento -->

//Chiedere all'utente una parola_utente
var parolaUtente = prompt('Inserisci una parola');
console.log(parolaUtente);

// verificare, tramite delle funzioni, se la parola inserita dall'utente è palindroma o meno

//creazione funzione per rovesciare la parola, dividendo ogni singola lettera e ricostruire la parola al contrario
function rovescioParola(parola) {

  var parolaArray = parola.split(''); //separazione delle lettere della parola inserita

  var parolaArrayRovesciata = parolaArray.reverse(); //array rovesciato al contrario

  var parolaRovesciata = parolaArrayRovesciata.join(''); // ricostruzione della parola al contrario

  return parolaRovesciata; // parola rovesciata
}

// creazione della funzione che determina se la parola inserita dall'utente è palindroma o Svolgimento
function palindroma(parola) {
  if(parola === rovescioParola(parola)) {
    return true; // controllo se la parola inserita è uguale a quella trasformata dalla funzione precedente
  } else {
    return false; // controllo se la parola inserita non è uguale a quella trasformata dalla funzione precedente
  }
}

// console.log del risultato
if(palindroma(parolaUtente)) {
  console.log('La parola inserita è palindroma!');
} else {
  console.log ('La parola inserita NON è palindroma!');
}
