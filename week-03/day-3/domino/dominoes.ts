'use strict'

// Dominoes
// You have the list of Dominoes
// Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides
// eg: [2, 4], [4, 3], [3, 5] ...

import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}

function print(dominoes: Domino[]) {
    dominoes.forEach(function (value) {
        console.log(value);
    });
}

let dominoes = initializeDominoes();


function printRight(dominoes: Domino[]) { 
  let rightDomino: Domino[] = [];
  rightDomino.push(dominoes[1]);
  for (let i: number = 0; i < 5; i++) { 
    for (let j: number = 0; j < 6; j++) { 
      if (rightDomino[i].values[1] === dominoes[j].values[0])
        rightDomino.push(dominoes[j]);
  }
}
return rightDomino;
}
   
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */



print(dominoes);
console.log(printRight(dominoes));