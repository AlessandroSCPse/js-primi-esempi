// Salutare: chiediamo all'utente il suo nome e inseriamo 
// in pagina la stringa "ciao <nome_utente>"

// nome utente
const userName = prompt('Dimmi il tuo nome');

// Creo il messaggio finale per l'utente
const userMessage = 'Ciao ' + userName;

// stampiamo
document.getElementById('result').innerHTML = userMessage;