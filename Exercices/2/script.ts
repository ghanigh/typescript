/* créer une variable "infos" qui ne peut accepter qu'un array de 
strings ou numbers ou booleans. ensuite ajouter un string "toto" + true + 40 */

let infos: (string | number | boolean)[] = []; 

infos.push("toto"); 
infos.push(true); 
infos.push(40); 

console.log(infos); 