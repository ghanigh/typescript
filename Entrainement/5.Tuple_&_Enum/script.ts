/*
Déclare une variable 'array' de type tuple qui prend des valeurs de type boolean et number.
Un "Tuple" en typescript est i, tableau ou le type de certains elements est connu.
Chaque élément du tableau a un type spécifique et l'ordre des element est important.
 */
let array: [boolean, number]

// initialise la variable 'array'
array = [false, 43]

// Déclare une varaible de 'role' de type objet avec des clés et leurs valeurs respectives.
const role = {
    react: 1,
    php: 2,
    css: 3
}

console.log(role);

/*
Un "enum" (enumération) est une manière de donner un nom a un ensembles de valeurs numerique.
Non, les valeurs d'un enum en typeScript de sont pas modifiables.
*/

enum Roles {
    JAVASCRIPT=1,
    CSS,
    REACT
}

console.log(Roles);

