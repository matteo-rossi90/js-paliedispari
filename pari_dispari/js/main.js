/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto*/

///////////////////////////////////////////////////////////////////////

//chiedere all'utente pari o dispari
const askUser = prompt('Pari o dispari?');
console.log("La scelta dell'utente è: ", askUser);

//chiedere all'utente di inserire un numero da 1 a 5
const numUser = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log("Numero utente: ", numUser);

//fare in modo che il computer generi un numero compreso tra 1 e 5
const numPC = randomPC(1, 5);
console.log("Numero PC: ",numPC);

// stabilire, in base al numero ottenuto dalla somma, chi è il vincitore
let result = oddEvenNumber(numUser, numPC);
console.log("Somma dei due numeri: ", result);

//dichiarare la variabile che contiene il messaggio da comunicare
let message;

//confrontare la somma con la dichiarazione dell'utente
if (result === askUser) {// se la somma corrisponde alla dichiarazione dell'utente
    message = 'Hai vinto!';
} else {
    message = 'Hai perso!';
}








let content = document.getElementById("messaggio");
content.innerHTML = message;


//FUNZIONI//

//generare un numero random da 1 a 5 per il computer
function randomPC(min, max){

    return Math.floor(Math.random() * (max - min + 1) + min);

}

//capire se la somma dei due numeri darà un numero pari o un numero dispari
function oddEvenNumber(num1, num2){

    //sommare i due valori
    let sum = num1 + num2;

    //stabilire se la somma restituisce un numero pari o dispari

    return sum % 2 === 0 ? "pari" : "dispari";
}

