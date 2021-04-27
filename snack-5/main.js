//Crea un array vuoto.
var numbers = [];
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.
for (var i = 0; i < 6; i++) {
    var number = Number(prompt('Inserisci un numero'));
    if (number%2 !== 0) {
        numbers.push(number);
    }
}
console.log(numbers);    
