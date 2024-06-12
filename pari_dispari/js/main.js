/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto*/

///////////////////////////////////////////////////////////////////////

//chiedere all'utente pari o dispari
let askUser = prompt('Pari o dispari');
console.log(askUser);

//chiedere all'utente di inserire un numero da 1 a 5
let numUser = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(numUser);

//fare in modo che il computer generi un numero compreso tra 1 e 5
let numPC = randomPC(1, 5);
console.log(numPC);


//FUNZIONI//

//generare un numero random da 1 a 5 per il computer
function randomPC(min, max){

    let num = Math.floor(Math.random() * (max - min) + min);

    return num;

}

//capire se la somma dei due numeri darà un numero pari o un numero dispari
function sumNumber(numUser, numPC){

    //sommare i due valori
    let sum = numUser + numPC;

    if ((numUser && numPC) % 2 === 0){
        sum = 'pari';
    }else{
        sum = 'dispari';
    }

    return sum;
}

