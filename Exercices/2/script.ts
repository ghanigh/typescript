/*
créer une variable "infos" qui ne peut accepter qu'un array de 
strings ou numbers ou booleans. ensuite ajouter un string "toto" + true + 40
*/

// Déclaration d'un tableau pouvant contenir des chaînes de caractères, des nombres ou des booléens
let infos: (string | number | boolean)[] = [];

// Ajout de différentes valeurs au tableau
infos.push("toto"); // Chaîne de caractères
infos.push(true);   // Booléen
infos.push(40);     // Nombre

// Affichage du contenu du tableau dans la console
console.log(infos);
