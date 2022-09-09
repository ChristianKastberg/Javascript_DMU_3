// opgave9.3.js
const outlook = "Anders Ole Jensen (EAAAANJE) <eaaaanje@students.eaax.dk>; Bodil Pedersen (EAAABOPE) <eaaabope@students.eaax.dk>; Åse Andersen (EAAAIDAN) <eaaaasan@students.eaax.dk>; Mühl Svendsen (EAAAPESV) <eaaamusv@students.eaax.dk>";

const regex = /(^|; )(.+?) \(.+?<(.+?)>/g;
let matched;
while ((matched = regex.exec(outlook)) !== null){
    console.log(matched[2] + " - " + matched[3]);
}

// print alle studerende dårligt eksempel listen indeholder kun studerende deres navn og email skal vises 