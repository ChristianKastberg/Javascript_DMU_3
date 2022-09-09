// opgave8.1.js
let personer = [
    { navn: 'Ole', alder: 25, mobil: 12345678 },
    { navn: 'Ida', alder: 19, mobil: 23456789 },
    { navn: 'Ask', alder: 32, mobil: 34567890 }
]
console.log(personer
    .find(person => person.mobil === 23456789)); // find bestemt person (Ida)

console.log(personer
    .map(person => person.alder)
    .reduce((minimum, alder) => alder < minimum ? alder : minimum)); // find person med mindste alder - 19

personer.forEach((person, index) => person.id = index + 1); // giv alle personer et id 
console.log(personer);

console.log(personer
    .map(person => person.navn)
    .sort()
    .reduce((navne, navn) => navne += ', ' + navn)); // generate text streng der indeholder alle personers navne sorted med komma

console.log(personer
    .filter(person => person.alder < 30)
    .map(person => ({navn: person.navn, mobil: person.mobil}))); // generate array med navn og mbnummer på personer yngre end 30