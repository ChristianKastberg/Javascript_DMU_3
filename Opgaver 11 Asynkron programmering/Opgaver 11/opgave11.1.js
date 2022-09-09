// opgave11.1.js
const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';

//Tag udgangspunkt i opgave11.1.js (get funktionen var lavet) og hent samt udskriv data om users. Hvis fejl eller exception, 
//skal den udskrives.Anvend funktionen get(url) til at hente data på nettet.'
//Funktionen brugerfetch(), der er en standard funktion i browseren, og derfor skal koden udføres vha.opgave11.1.html.
//Løs opgaven både med og uden async. Afprøv programmet med de 3 forskelligeuserUrl's.   



async function get(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    return await respons.json();
}

async function main(userUrl) { // med async 
    try {
        let users = await get(userUrl);
        console.log(users);
    } catch (fejl) {
        console.log(fejl);
    }
}
main(userUrl);

get(userUrl)  // uden async
.then(users => console.log(users))
.catch(fejl => console.log(fejl));