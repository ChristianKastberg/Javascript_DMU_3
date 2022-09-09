let array = ["test", "testy", "testo", "tasty", "ehhh"];


// return random string fra arrayet 
// Math.random returns tal mellem 0-1 aldrig 1
// Math.floor sørger for at det bliver et heltal
function randomText(array) {
    let index = Math.floor(Math.random() * array.length);
    
   return array[index];
}
// don't remember what goes here riperroo
function randomFarve(){}

class Bil {
    constructor(mærke, farve) {
        this.mærke = mærke;
        this.farve = farve;


    }
}
    // OBS virker kun hvis Bil er en function ikke en class 
    Bil.prototype.toString = function BilToString() {
    return `Bilen er af Mærket ${this.mærke} Og har farven ${this.farve}`;
}

let b1 = new Bil("toyota", "rød");

console.log(randomText(array)); // returns random string from array
console.log(b1);