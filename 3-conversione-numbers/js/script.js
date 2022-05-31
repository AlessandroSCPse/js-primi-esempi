let myNumber = 12;
let mySecondNumber = '6';
console.log(mySecondNumber);

// Prima di fare l'operzione somma devo convertire mySecondNumber
// in un numero
let mySecondNumberConverted = parseInt(mySecondNumber);
console.log(mySecondNumberConverted);

let result = myNumber + mySecondNumberConverted;
console.log(result);
