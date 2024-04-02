// void = neant, pour quand on a des fonctions qui ne return rien
// ? facultatif = pas obligatoire
// void est different de undefined, undefined est un type

const multi = (num1: number, num2: number, action?: string) => {
    if(action) console.log(action);
    return num1 * num2

}
console.log(multi(1,2));

// Le type Function s'escrit Majuscul
let foo: Function

foo = () => {}

// Fonction signature
let toto: (a: number, b: number) => number
toto = (a, b) => a + b;

// callback

function greeting(fs: (a:string) => void){
    fs('hello')
}

function printConsole(msg: string){
    console.log(msg);

}

greeting(printConsole)