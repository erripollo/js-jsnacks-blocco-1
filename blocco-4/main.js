//JSnack 1A
/* 
Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
*/

var Palla = {
    nome : 'palla',
    peso : 10
}

/* 
Blocco 4 - Snack 1B
Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
*/

Palla.peso = prompt('inserisci peso della palla')
console.log(Palla);