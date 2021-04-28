//Stampa il cubo dei primi N numeri,
//dove N è un numero indicato dall’utente.
var userNumber = Number(prompt('Inserisci un numero'))

for (var i = 1; i <= userNumber; i++){
    var number = i
    var numberPow = Math.pow(number, 3);
    console.log(numberPow);
}
