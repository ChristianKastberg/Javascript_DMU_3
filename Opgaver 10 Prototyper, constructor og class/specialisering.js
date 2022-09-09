// specialisering.js
class Person {
    constructor(navn) {
        this.navn = navn;
    }
    toString() { return this.navn; }
    equals(p){return  p.prototype == this.prototype && p.name == this.name && p instanceof Person}
    static compare(p1,p2){ 
        if(p1 instanceof Person && p2 instanceof Person){
            if(p1.constructor.name == p2.constructor.name){
                return true
            } else{
                return false
            }
        }
        return "something went wrong"
    }

}
class Studerende extends Person {
    constructor(navn, id) {
        super(navn);
        this.id = id;
    }
    toString() { return super.toString() + ": " + this.id; };
    equals(s){return s.id == this.id && s.prototype == this.prototype && s instanceof Studerende}
}



let person = new Person("Viggo");
let person1 = new Person("Yik");
let person2 = new Person("aaaa");
let person3 = new Person("buk");

let array = [person, 
person1,
person2,
person3]


let studerende = new Studerende("Ida", 123);
//console.log(person instanceof Person); // => true
//console.log(person instanceof Studerende); // => false
//console.log(studerende instanceof Person); // => true
//console.log(studerende instanceof Studerende); // => true
console.log(person.equals(person));
console.log(studerende.equals(studerende))
console.log(Person.compare(person, person)) 
console.log(array.sort()); // Lav min egen sort metode nok lettere, tag bubblesort skabelon

