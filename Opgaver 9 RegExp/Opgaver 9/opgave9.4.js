// opgave9.4.js
let regexp = /^([1-9]|[12]\d|3[01])\/([1-9]|1[0-2]) 20\d\d$/; // DD/MM 20XX
// \/ chekker litterally om der er en / 
// | OR tegn virker også i regex godt at vide 
// /d sørger for at det er et ciffer [0-9] 
let dato = "31/8 2020";
let dato1 = "31/18 2020";
let dato2 = "31/08 2020";
let dato3 = "31/8 1999";
let dato4 = "32/8 2020";
console.log(regexp.test(dato));
console.log(regexp.test(dato1)); // der er ikke en 18 måned
console.log(regexp.test(dato2)); // oktober skrives som 8 ikke 08
console.log(regexp.test(dato3)); // "min" kræver at årstallet starter med 20 e.g fejler 1920
console.log(regexp.test(dato4)); // der er ikke nogen måned med 32 dage 

console.log(""); // empty space seperate tests
let regexp2 = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/; // 19|20/MM/DD

let datoo = "1920/12/31"
console.log(regexp2.test(datoo));

let regexp3 = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/; //DD//MM//YYYY