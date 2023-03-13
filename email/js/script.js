// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del cont

//Chiediamo all'utente la sua email

const email = ["@libero.it", "@gmail.com", "@hotmail.it", "@microsoft.com"];
console.log(email);

const userEmail = prompt("Qual'è la tua email?");


//SE l'email inserita dall'utente e giusta 
//  stampiamo che l'email è buona
//Altrimenti 
// stampiamo che l'email non è corretta

let emailFound = false;

for (let i = 0; i < email.length; i++) {
    const currentEmail = email[i];
    console.log(currentEmail);

    if (currentEmail === userEmail) {
        emailFound = true;
    }
}


let message;
if (emailFound === true) {
    message = "l'email inserita è corretta"
} else {
    message = "l'email inserita non è corretta"
}

console.log(message);

document.getElementById("result").innerHTML = message;