// vis.js
const talHandler = event => event.target.value = Math.trunc(Math.random() * 100) + 1; // tal mellem 1-100
const tidHandler = event => event.target.value = new Date().toLocaleTimeString(); // præcise tidspunkt på døgnet e.g 17.23.19

const ids = { // element property tilføjes nedenfor
    tal: {tekst: "Tal:", onclick: talHandler},
    tid: {tekst: "Tid:", onclick: tidHandler},
}        

let elements = document.querySelectorAll('input');
for (input of elements) {
    input.outerHTML = '<label id="' + input.id + '-label" for="' + input.id + '">' + ids[input.id].tekst + 
    '</label>' + input.outerHTML;
}        

elements = document.querySelectorAll('input');
for (input of elements) {
    ids[input.id].element = input;
    input.onclick = ids[input.id].onclick;
}

document.querySelector('button').onclick = () => { // knappen reseteer input felternes værdi
    ids.tal.element.value = '';
    ids.tid.element.value = '';
}