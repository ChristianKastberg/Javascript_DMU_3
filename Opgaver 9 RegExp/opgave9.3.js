// opgave9.3.js
const outlook = 
"Anders Jensen (EAAAANJE) <eaaaanje@students.eaax.dk> Bodil Pedersen (EAAABOPE) <eaaabope@students.eaax.dk>; Åse Andersen (EAAAIDAN) <eaaaasan@students.eaax.dk>; Mühl Svendsen (EAAAPESV) <eaaamusv@students.eaax.dk>";

const regexp = /^[a-zA-Z ]*$/;
console.log(regexp.exec());

let i = 0;
while(outlook.length < i){
    i++;
    if(regexp.test() == true){
        console.log("test");
    } 
    

}