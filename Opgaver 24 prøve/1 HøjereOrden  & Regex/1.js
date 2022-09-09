const array = [{ navn: 'Åge', kast: [3, 1, 2] }, { navn: 'Ida', kast: [6, 2, 4] }, { navn: 'Ida', kast: [1, 3, 5] }];

// højere ordens funktioner map, reduce, filter
function kast(navn, array) {
    return array.filter(e => e.navn === navn).map(e => e.kast);
}

function størst(array) {
    return array.map(e => e.kast.reduce((a, e) => a > e ? a : e));
}

// konverter array til json
const json = JSON.stringify(array);
function terninger(json) {
    return json.match(/[1-6]/g);
}


// regex 
function navne(json) {
    let regex = /:"(.+?)"/g;
    let matched;
    let array = [];
    while (matched = regex.exec(json)) {
        let navn = matched[1];
        if (!array.includes(navn)) array.push(navn);
    }
    return array;
}


// Tests
console.log(kast('Ida', array));
console.log(kast('Åge', array));
console.log(kast('Viggo', array)); // empty ingen der hedder Viggo
console.log(størst(array));
console.log(json);
console.log(terninger(json));
console.log(navne(json));