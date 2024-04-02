"use strict";
// void = neant, pour quand on a des fonctions qui ne return rien
// ? facultatif = pas obligatoire
// void est different de undefined, undefined est un type
const multi = (num1, num2, action) => {
    if (action)
        console.log(action);
    return num1 * num2;
};
console.log(multi(1, 2));
// Le type Function s'escrit Majuscul
let foo;
foo = () => { };
// Fonction signature
let toto;
toto = (a, b) => a + b;
// callback
function greeting(fs) {
    fs('hello');
}
function printConsole(msg) {
    console.log(msg);
}
greeting(printConsole);
