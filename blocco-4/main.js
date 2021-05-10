//JSnack 1A
/* 
Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
*/

/* var Palla = {
    nome : 'palla',
    peso : 10
} */

/* 
Blocco 4 - Snack 1B
Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.
*/

/* Palla.peso = Number(prompt('inserisci peso della palla'))
console.log(Palla); */


/*
Blocco 4 - Sanck 2
Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
*/

var TriangoloRettangolo = {
    base : 10,
    altezza : 15,
}

var area = (TriangoloRettangolo.base * TriangoloRettangolo.altezza)/2;
console.log(area);

var ipotenusa = Math.sqrt(Math.pow(TriangoloRettangolo.base, 2) + Math.pow(TriangoloRettangolo.altezza, 2));

var perimetro = ipotenusa + TriangoloRettangolo.base + TriangoloRettangolo.altezza;
console.log(perimetro.toFixed(2));
