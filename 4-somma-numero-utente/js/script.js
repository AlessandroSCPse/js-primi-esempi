// Sommiamo 5 al numero dato dall'utente e stampiano il risultato in pagina

// 1- RACCOLTA DATI E DEFIZIONE DELLE VARIABILI
// Chiedo il numero all'utente
const userNumber = prompt('Dammi un numero');

// 2- LOGICA DELLA MIA APPLICAZIONE
// Convertiamo la stringa in numero
const userNumberAsNumber = parseInt(userNumber);
// Sommo 5 al numero dell'utente
const sumResult = userNumberAsNumber + 5;
// Costruisco il messaggio finale per l'utente
const userMessage = 'La somma di ' + userNumber + ' e 5 è ' + sumResult;

// 3- OUTPUT PER L'UTENTE
// Stampo in pagina
// alert(userMessage);
document.getElementById('result').innerHTML = userMessage;