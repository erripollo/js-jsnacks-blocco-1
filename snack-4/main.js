//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
var guests = ['nome1', 'nome2', 'nome3', 'nome4', 'nome5', 'nome6'];
//chiedi all’utente il suo nome
var userName = prompt('Qual\'è il tuo nome?')

//e comunicagli se può partecipare o no alla festa.
switch (true) {
    case guests.includes(userName):
        console.log('Sei invitato!');
        break;

    default:
        console.log('Non sei tra gli invitati!');
        break;
}