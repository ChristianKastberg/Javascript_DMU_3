// opgave2.7.js
// giver et array metoder
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

list.max = function max() {
    let max = this[0];
    for (let i = 1; i < this.length; i++) {
        const tal = this[i];
        if (tal > max)
            max = tal;
    }
    return max;
}
console.log(list.max());

function contains(element) {
    return this.includes(element);
}
list.contains = contains;
console.log(list.contains(7));

list.sum = function () {
    let sum = 0;
    for (let tal of this)
        sum += tal;
    return sum;
}
console.log(list.sum());