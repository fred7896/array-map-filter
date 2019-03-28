/* Array.prototype.map - Exercice 1

Ecrire une fonction getStringsLength qui reçoit comme un argument un tableau de chaînes.
En utilisant map, cette fonction doit renvoyer un tableau avec,
pour chaque chaîne CHAINE de longueur N en entrée, la chaîne "CHAINE contains N characters"
en sortie.

Exemple d'entrée:
  [
    'Chicken',
    'Bacon',
    'Tofu',
    'Mayonnaise'
  ]
En sortie: [
  'Chicken contains 7 characters',
  'Bacon contains 5 characters',
  'Tofu contains 4 characters',
  'Mayonnaise contains 10 characters'
]

 */
const food =
[
  'Chicken',
  'Bacon',
  'Tofu',
  'Mayonnaise'
];

const getStringsLength = (tab) => tab.map(item => {
return (`${item} contains ${item.length} characters`);

});
//const result = getStringsLength(food);
//console.log(result);

console.log(getStringsLength(food));

// Si besoin, tu peux toujours visualiser le résultat avec console.log,
// mais alors, il faut alors lancer l'exercice avec node map/ex1
// console.log(getStringsLength(['Cat', 'Lion', 'Tiger', 'Jaguar', 'Leopard']));

// Ne pas modifier l'export
module.exports = getStringsLength;
