'use strict';

//tworzyć nagłowek h2, dodaj treść i umieśc pod nagłowkiem h1


var secondHeader = document.createElement('h2');

console.log(secondHeader);

var secondHeaderText = document.createTextNode('Lorem Inpsum dolor amit');

console.log(secondHeaderText);

secondHeader.appendChild(secondHeaderText);

console.log(secondHeader);

var mainHeader = document.getElementById('main-header');
mainHeader.parentNode.appendChild(secondHeader);

var thirdHeader = document.createElement('h3');
var thirdHeaderText = document.createTextNode('amit dolor ipsum lorem');

thirdHeader.appendChild(thirdHeaderText);

mainHeader.parentNode.insertBefore(thirdHeader,mainHeader);


//Dodaj paragraf pommiedzy nagłowkami h1 i h2 ;

var paragraph = document.createElement('p');
var paragraphText = document.createTextNode(' treś ćtreś ćtreść treśćtre śćtreśćt reśćtr eśćtreś ćtreść');

paragraph.appendChild(paragraphText);

console.log(paragraph);
console.log(mainHeader.nextSibling);

mainHeader.parentNode.insertBefore(paragraph, mainHeader.nextSibling);

thirdHeader.setAttribute('class','third-header');



var parFirst = document.getElementById('parFirst');


parFirst.removeChild(parFirst.children[1]);

console.log(parFirst.children);

parFirst.children[3].removeAttribute('class');


//dodawanie treści do insniejących znaczników

mainHeader.innerHTML = 'Nowa treść <span>paragrafu,/span.';

parFirst.innerHTML = 'Nowa treść paragrafu';

//innerText();


//klasy i style

var superLink = document.querySelector('.superlink');
console.log(superLink.classList);

superLink.className += ' calkiem-nowa-klasa';

superLink.style.fontSize = '3em';
