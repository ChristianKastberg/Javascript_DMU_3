
// hvad i guds navn laver jeg her tester for store og små bogstaver mellem a-z i guess?

let string = "testing testing testing"
// console.log(/[a-z&\^0-9]/.test(string));
console.log(/^[a-zA-Z ]*$/.test(string)); // mangler at teste for komma * bruges så alle bogstaver chekkes

string ="numbertest 1234"
// console.log(/[a-z&\^0-9]/.test(string));
console.log(/^[a-zA-Z ]*$/.test(string));
