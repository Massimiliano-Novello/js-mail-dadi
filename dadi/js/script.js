// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


//Generare numeri random
const number = Math.floor(Math.random() * 6) + 1;
console.log(number);

const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);


//Logcica
let message;
if (number > userNumber) {
        message = "vince il computer";
        document.querySelector(".result").classList.add("number")
} else {
        message = "vince l'utente";
        document.querySelector(".result").classList.add("user-number")
}

//Stampare il risultato

document.querySelector(".result").innerHTML = message;

