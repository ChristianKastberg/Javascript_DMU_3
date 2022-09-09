// opgave9.2.js
let regexp = /^([1-9]\d*,)*[1-9]\d*$/;
// Valider med et RegExp, at en tekststreng kun indeholder positive heltal, adskilt med komma.
let tekst = "1,23,456";
let tekst1 = "0,23,456";
let tekst2 = "1 23,456";
let tekst3 = "1,23,45x6";
console.log(regexp.test(tekst)); // true
console.log(regexp.test(tekst1)); // false indeholder 0 vi tester på 1-9 så retunere false
console.log(regexp.test(tekst2)); // false ikke noget komma mellem 1 og 23
console.log(regexp.test(tekst3)); // false  "x" er ikke et tal 


// [1-9][0-9] matcher tallene 10-99 for future ref

// forskellige nyttige regex matches premade for the exam 
// 000..255: ^([01][0-9][0-9]|2[0-4][0-9]|25[0-5])$

// 0 or 000..255: ^([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])$

// 0 or 000..127: ^(0?[0-9]?[0-9]|1[01][0-9]|12[0-7])$

// 0..999: ^([0-9]|[1-9][0-9]|[1-9][0-9][0-9])$

// 000..999: ^[0-9]{3}$

// 0 or 000..999: ^[0-9]{1,3}$

// 1..999: ^([1-9]|[1-9][0-9]|[1-9][0-9][0-9])$

// 001..999: ^(00[1-9]|0[1-9][0-9]|[1-9][0-9][0-9])$

// 1 or 001..999: ^(0{0,2}[1-9]|0?[1-9][0-9]|[1-9][0-9][0-9])$

// 0 or 00..59: ^[0-5]?[0-9]$

// 0 or 000..366: ^([012]?[0-9]?[0-9]|3[0-5][0-9]|36[0-6])$
