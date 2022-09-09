// opgave8.4.js
// forhåbentlig ingen observer opgaver til eksamen 
function subject(){
    const observers = [];
    function registerObserver(observer){
        observers.push(observer);
    }
    function notifyObservers(notification) {
        for (let observer of observers){
            observer(notification);
        }
    }
    return {registerObserver, notifyObservers}
}

const subjekt = subject();
console.log(subjekt);

function f() {
    console.log('f: ...');
}
function g(notifikation) {
    console.log('g: ' + notifikation);
}
subjekt.registerObserver(f);
subjekt.registerObserver(g);
subjekt.notifyObservers('Hello observer!');