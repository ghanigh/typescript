"use strict";
/*
Créez une variable "infos" qui doit être un tuple de seulement deux valeurs, une chaîne et un nombre, dans cet ordre.
Modifiez ensuite la valeur à l'indice "1", puis ajoutez "hello" au tableau.
*/
// Création d'un tuple contenant exactement deux valeurs : une chaîne de caractères et un nombre
let infos = ["foo", 42];
// Affichage du tuple dans la console avant toute modification
console.log("Avant la modification :", infos);
// Modification de la valeur à l'index 1 du tuple
infos[1] = 43;
// Affichage du tuple dans la console après la modification
console.log("Après la modification :", infos);
// Tentative d'ajout de "hello" au tuple (cela provoquera une erreur car les tuples sont des tableaux de taille fixe)
infos.push("hello"); // Cette ligne causera une erreur
// Affichage du tuple dans la console après avoir tenté d'ajouter "hello"
console.log("Après l'ajout de 'hello' :", infos);
