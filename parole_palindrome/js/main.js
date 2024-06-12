/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

//////////////////////////////////////////////////////////////////

//chiedere all'utente di inserire una parola
let askWord = prompt('Inserisci una parola');
console.log(askWord);

let palindromeWord = checkWord(askWord);
console.log(palindromeWord);

//stabilire se la parola immessa è palindroma o no e inserire il messaggio in DOM
if (palindromeWord == true) {
    console.log("La parola è palindroma");
}
else {
    console.log("La parola non è palindroma");
}

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
