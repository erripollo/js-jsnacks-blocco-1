//Chiedi un numero di 4 cifre all’utente
var userNumber = prompt('inserisci un numero di 4 cifre');
console.log(userNumber);

//e calcola la somma di tutte le cifre che compongono il numero.
var sum = 0;

for (var i = 0; i < userNumber.length; i++){
    //console.log(userNumber[i]);
    sum += + userNumber[i] 
}
console.log(sum);