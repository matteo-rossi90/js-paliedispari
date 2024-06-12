/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto*/

///////////////////////////////////////////////////////////////////////

//selezionare il form per raccogliere la scelta "Pari o Dispari?"
let inputChoice = document.querySelector("#input-word");

//selezionare il form per raccogliere un numero immesso dall'utente
let inputNum = document.querySelector("#input-num");

//selezionare il pulsante
const addButton = document.querySelector('.send');

//attivare un evento che consenta di raccogliere ed elaborare i dati immessi
addButton.addEventListener('click',
    function(){

        //chiedere all'utente pari o dispari
        let askUser = inputChoice.value;
        console.log("La scelta dell'utente è: ", askUser);

        //chiedere all'utente di inserire un numero da 1 a 5
        const numUser = parseInt(inputNum.value);
        console.log("Numero utente: ", numUser);

        //fare in modo che il computer generi un numero compreso tra 1 e 5
        const numPC = randomPC(1, 5);
        console.log("Numero PC: ", numPC);

        // stabilire, in base al numero ottenuto dalla somma, chi è il vincitore
        let result = oddEvenNumber(numUser, numPC);
        console.log("Somma dei due numeri: ", result);

        //dichiarare la variabile che contiene il messaggio da comunicare
        let message;

        //selezionare l'intestazione dove sarà presente il messaggio
        let content = document.getElementById("messaggio");

        //confrontare la somma con la dichiarazione dell'utente
        if (result === 'pari' && askUser === 'pari') {// se la somma dà un numero pari e corrisponde alla dichiarazione dell'utente
            message = 'Hai vinto!';
        } else if (result === 'pari' && askUser === 'dispari') {// se la somma dà un numero pari e non corrisponde alla dichiarazione dell'utente
            message = 'Hai perso! Vergognati...';
        } else if (result === 'dispari' && askUser === 'dispari') {// se la somma dà un numero dispari e corrisponde alla dichiarazione dell'utente
            message = 'Hai vinto!';
        } else {
            message = 'Non hai selezionato bene il numero. Riprova.';
        }

        //aggiungere una classe all'intestazione del messaggio
        content.classList.add('item-style');
        content.style.opacity = 0;
        
        //impostare un timing per l'effetto graduale
        setTimeout(() => {
            content.style.transition = 'opacity 1s';
            content.style.opacity = 1;
        }, 100 * content); // Ritardare leggermente l'elemento

        //stampare il messaggio in DOM
        content.innerHTML = message;

    }
)


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

