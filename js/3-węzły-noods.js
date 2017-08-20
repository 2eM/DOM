'use strict' ;

var pierwszyPar = document.getElementById('parFirst');

// Węzły rodzica

console.log(pierwszyPar.parentNode);
console.log(pierwszyPar.parentElement);


//Węzły dzieci

console.log('Tablica węzłów : ' + pierwszyPar.childNodes);
console.log(pierwszyPar.children);

console.log(pierwszyPar.firstChild);
console.log(pierwszyPar.lastChild);

console.log(pierwszyPar.firstElementChild);
console.log(pierwszyPar.lastElementChild);

//console.log(pierwszyPar.hasChildNodes());

// Węzły rodzeństwa

console.log(pierwszyPar.previousSibling);
console.log(pierwszyPar.nextSibling);


console.log(pierwszyPar.previousElementSibling);
console.log(pierwszyPar.nextElementSibling);


//Wyczyśc z komentarzy index.html / parFirst

console.log(pierwszyPar);

var parFirstNodes = pierwszyPar.childNodes ;

for(var j=0 ; j<parFirstNodes.length; j++){
    console.log(parFirstNodes[j].nodeType);
    if(parFirstNodes[j].nodeType === 8 ){parFirstNodes[j].parentNode.removeChild(parFirstNodes[j]);}
}

