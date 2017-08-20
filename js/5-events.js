 'use strict';

var mainHeader = document.getElementById('main-header')

//Zdarzenie DOM

//Takim podejściem zyskujemy universalność
function zmienKolorTla(){
    this.style.backgroundColor='red';
}

mainHeader.onclick = zmienKolorTla;


mainHeader.onclick = function(){
    this.style.backgroundColor='yellow';
}


// Nasłuchiwanie zdarzenia

var secPar = document.getElementById('parSecond');

secPar.addEventListener('click',zmienKolorTla);

/*secPar.addEventListener('click',function(){
    this.style.backgroundColor='red';
});*/

mainHeader.onclick = function(){
    secPar.removeEventListener('click',zmienKolorTla);
}

//Propagcja zdarzeń, bombelkowoanie zdarzen

var firstPar = document.getElementById('parFirst');
var lastLink = firstPar.lastElementChild;

firstPar.addEventListener('click',function(){
    alert('Klik w cały kontener');
});

lastLink.addEventListener('click',function(){
    event.preventDefault();
    event.stopPropagation();
    alert('Klik w link');
});