/* Array.prototype.filter - Exercice 6

Ecrire une fonction filterOffensiveComments, qui attend deux paramètres, tous deux
des tableaux de chaînes de caractères :
1. des commentaires sur un fil d'actualité ou une vidéo.
2. une liste de mots "grossiers" ou "offensifs" à bannir

La fonction doit éliminer les commentaires contenant au moins un des mots "bannis".

Exemple d'entrée:
1. des commentaires (on est resté soft pour ne pas heurter les oreilles chastes)
[
  "Very useful tutorial, thank you so much!",
  "React is not a damn framework, it's a LIBRARY"
  "Why you put bloody kitten pictures in a tech tutorial is beyond me!",
  "Which one is better, React or Angular?",
  'There is no "better", it depends on your use case, DAMN YOU'
]
2. mots à bannir: ['bloody', 'damn']

Sortie attendue:
[
  "Very useful tutorial, thank you so much!",
  "Which one is better, React or Angular?",
]

*/

const exemple1 = [
  "Very useful tutorial, thank you so much!",
  "React is not a damn framework, it's a LIBRARY",
  "Why you put bloody kitten pictures in a tech tutorial is beyond me!",
  "Which one is better, React or Angular?",
  'There is no "better", it depends on your use case, DAMN YOU'
];

const exemple2 = ['bloody', 'damn'];

const filterOffensiveComments = (tabCom, tabBan) => tabCom.filter(item => {

  let count = 0;
  for(let i = 0; i <tabBan.length; i++){ 
    if(item.toLowerCase().indexOf(tabBan[i].toLowerCase()) !== -1){
      count++;
    }
    //console.log(item);
    //console.log(tabBan[i].toLowerCase());
    //console.log(count);
  }
  return (count === 0);
    
  });
console.log(filterOffensiveComments(exemple1,exemple2));
// Ne pas modifier l'export
module.exports = filterOffensiveComments;

/*
var pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true


var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

// expected output: "a"
// expected output: "b"
// expected output: "c"*/