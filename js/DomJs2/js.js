// let div4 = document.getElementById('four4'); // всегда возвращает один элемент
//let p = div4.getElementsByTagName('p');// всегда возвращает массив
// let div = document.getElementsByTagName('div');
// console.log(div);

// div[2].style.background = 'yellow'; 

//------------------------------------

// let  div = document.querySelector('#four4 p')//.querySelector('p');//css selector sinlge first element querySelector('div p') вариант написания
// let div2 = document.querySelectorAll('div p'); //collection div
// console.log(div2);

//------------------------------------

// four4.style.background = 'red';


//Получаем дочерние вложенные элементы

let div = document.querySelector('div');
let child = div.childNodes;//возвращает все вложенные элементы в том числе пробелы и переносы, тексты не удобно
//console.log(child);
//console.log(div.firstChild); //возвращение первого узла 
child = div.children;
console.log(child);

let hyper = document.querySelector('a');
console.log(hyper.parentElement.nextElementSibling);
console.log(hyper.parentElement.previousElementSibling); //проверку делать на null а не undefined