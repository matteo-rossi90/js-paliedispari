/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

//////////////////////////////////////////////////////////////////

//selezionare l'input che raccoglierà la parola
let inputName = document.querySelector("#input-text");

//selezionare il pulsante
let addButton = document.querySelector(".send");

addButton.addEventListener('click', 
    function (){

        //salvare la parola inserita dall'utente
        let askWord = inputName.value;
        console.log(askWord);

        let palindromeWord = checkWord(askWord);
        console.log(palindromeWord);

        //dichiarare la variabile che conterrà il messaggio e il suo inserimento in base all'id
        let message;
        const content = document.getElementById("text");

        //stabilire se la parola immessa è palindroma o no e inserire il messaggio in DOM
        if (palindromeWord) {
            message = "La parola è palindroma";
        }else{
            message = "La parola non è palindroma";

        }

        //definire un'opacità inziale all'intestazione del messaggio
    
        content.style.opacity = 0;

        setTimeout(() => {
            content.style.transition = 'opacity 1s';
            content.style.opacity = 1;
        }, 100 * content); // Ritardare leggermente l'elemento

        //stampare il messaggio in DOM
        content.innerHTML = message;

    }
)

//FUNZIONE//
//capire se quella parola è palindroma 
//(ossia si legge ugualmente da sinistra verso destra o viceversa)

function checkWord(string) {

    //separare la parola in parti (split), leggerla al contrario (reverse) 
    //e riunire le parti separate (join)
    const reversedWord = string.split('').reverse().join('');

    if (string === reversedWord){//se qualsiasi parola immessa risulta palindroma
        return true;
    
    }else{
        return false;
    }
        
}
