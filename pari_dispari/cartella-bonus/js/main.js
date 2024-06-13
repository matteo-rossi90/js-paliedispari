/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto*/

///////////////////////////////////////////////////////////////////////

//selezionare l'input per la scelta "Pari o Dispari?"
let inputChoice = document.querySelector("#input-word");

//selezionare l'input per il numero immesso dall'utente
let inputNum = document.querySelector("#input-num");

//selezionare il pulsante
const addButton = document.querySelector('.send');

//attivare un evento che consenta di raccogliere ed elaborare i dati immessi
addButton.addEventListener('click',
    function(){

        //salvare la dischiarazione "pari" o "dispari" scelta dall'utente
        let askUser = inputChoice.value;
        console.log("La scelta dell'utente è: ", askUser);

        //salvare il numero inserito dall'utente
        const numUser = parseInt(inputNum.value);
        console.log("Numero utente: ", numUser);

        //fare in modo che il computer generi un numero compreso tra 1 e 5
        const numPC = randomNum(1, 5);
        console.log("Numero PC: ", numPC);

        // stabilire, in base al numero ottenuto dalla somma, chi è il vincitore
        let result = oddEvenNumber(numUser, numPC);
        console.log("Somma dei due numeri: ", result);

        //dichiarare la variabile che contiene il messaggio da comunicare
        let message;

        //selezionare l'intestazione dove sarà presente il messaggio
        let content = document.getElementById("messaggio");

        //confrontare la somma con la dichiarazione dell'utente
        if (result === askUser) {// se la somma corrisponde alla dichiarazione dell'utente
            message = 'Hai vinto!';
        } else {
            message = 'Hai perso!';
        }

        // definire un'opacità inziale all'intestazione del messaggio
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

//generare un numero random da 1 a 5
function randomNum(min, max){

    return Math.floor(Math.random() * (max - min + 1) + min);

}

//capire se la somma dei due numeri darà un numero pari o un numero dispari
function oddEvenNumber(num1, num2){

    //sommare i due valori
    let sum = num1 + num2;

    //stabilire se la somma restituisce un numero pari o dispari

    return sum % 2 === 0 ? "pari" : "dispari";
}

