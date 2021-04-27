//Il software deve chiedere per 10 volte all’utente di inserire un numero.
var numbers = [];

for (var i = 0; i < 10; i++) {
    var number = Number(prompt('Inserisci un numero'));
    numbers.push(number)
}

//Il programma stampa la somma di tutti i numeri inseriti.
var total = 0

for (var i = 0; i < numbers.length; i++) {
    total += numbers[i]
 
}

console.log(total);