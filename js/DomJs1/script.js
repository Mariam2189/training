//Создание узла в HTML

let p = document.createElement('p');
//document.body.appendChild(p) //выводит но - после скрипта, что не совсем удобно
document.body.insertBefore(p, document.querySelector('#out'));
p.innerHTML = 'Пример элемента';
p.classList.add('main', 'green'); 
console.log(p);