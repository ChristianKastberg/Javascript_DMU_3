// opgave11.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

/**
 * Opgave 11.1 
 * Tag udgangspunkt i opgave11.1.js og hent samt udskriv data om users. 
 * Hvis fejl eller exception, skal den udskrives.
 * Anvend funktionen get(url) til at hente data på nettet.
 * Funktionen brugerfetch(), der er en standard funktion i browseren, og derfor skal koden udføres
 * vha.opgave11.1.html. Løs opgaven både med og uden async.
 * Afprøv programmet med de 3 forskelligeuserUrl's.   
 */

// find "username" og tag den data hmm 
function test(nr){
     //return new Promise(function (resolve, reject) {
    //
   // } 
}
 // ændret til userUrl, måske ikke nødvendig 
 // async skal kaldes i en anden metode 
async function get(url) {
    const respons = await fetch(userUrl) // ændret fra url til userUrl, might be wrong
    .then(response => response.json())
    .then(json => console.log(json));
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
        // promise skal sikkert bruges her         
    return await respons.json();
 }

