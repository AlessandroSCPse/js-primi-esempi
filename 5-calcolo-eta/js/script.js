// Anni: chiediamo all'utente la sua età e comunichiamo l'anno di nascita.

// Anno corrente - età utente
const currentYear = 2022;
const userAge = prompt('Dimmi la tua età');

// Converto l'età utente da stringa a numero
const userAgeAsNumber = parseInt(userAge);

// Per calcolare l'anno di nascita si fa: anno corrente - età
const yearOfBirth = currentYear - userAgeAsNumber;

// Messaggio utente
const userMessage = 'Sei nato nel ' + yearOfBirth;

// Scrivere in pagina
document.getElementById('result').innerHTML = userMessage;