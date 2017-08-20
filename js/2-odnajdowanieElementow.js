'use strict' ;

var firstParagraph = document.getElementById('parFirst');
console.log(firstParagraph);

firstParagraph.style.color='red';


//Odwołanie po klasie

var superLinki = document.getElementsByClassName('superlink');
console.log(superLinki); // Zwrócona kolekcja elementów

superLinki[0].style.color = 'green';

// nie jest wspierane przez wszystkie pzegldarki
//superLinki.forEach(function(elem){
//                   elem.style.color = 'yellow';
//                   });

for(var i=0 ; i<superLinki.length;i++){
    superLinki[i].style.color = 'yellow' ;
}


//Odwołanie do znacznika

var linkPoTagu = document.getElementsByTagName('a');
console.log(linkPoTagu);    


//Odwołanie po selektorze CSS

var odwolaniePoSelektorze = document.querySelector('#parSecond');
console.log(odwolaniePoSelektorze);    

var odwolaniePoSelektorzeKlasy = document.querySelector('.link');
console.log(odwolaniePoSelektorze); 

var odwolaniePoSelektorze = document.querySelectorAll('.link');
console.log(odwolaniePoSelektorze); 