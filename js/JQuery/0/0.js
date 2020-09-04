$(document).ready(function(){
    //Селекторы

    //Базовые селекторы (#id, tagName, .class)
    //$('p.blue').css('border','solid 3px red');

   // $('p').css('border', 'solid 3px red');
   //$('p.lead').css('border', 'solid 3px red'); 
   //$('body h2').css('border', 'solid 3px red'); 
   //$('h2 + p').css('border', 'solid 3px red'); 
   //$('h2 ~ p').css('border', 'solid 3px red'); 
   //Селекторы взаимодействия (parent, child, + ~ И т.д.)
   // $('h2').css('border', 'solid 3px red');
   $('h2').parent().css('border', 'solid 3px red'); //обращение к родителю

   //Простые фильтры (:first, :last, even, odd, eq и тд)
   $('p:first').css('border', 'solid 3px red');

    // фильтры по содержимому (:has, :parent, :empty и тд)
    //$('h2:has(span').css('border', 'solid 3px red');
    //$('h2:has(span').css('border', 'solid 3px red');
    //$('.box:parent').css('border', 'solid 3px red');


   // фильтры по атрибутам ([name ~= value] и тд)
   //$('a[href="https://www.google.com"]').css('border', 'solid 3px red');\

   //$('a[href!="https://www.google.com"]').css('border', 'solid 3px red');

   //$('a[href^="https"]').css('border', 'solid 3px red');

    //$('a[href$=".ru"]').css('border', 'solid 3px red');
    //$('a[href*=".ru"]').css('border', 'solid 3px red');
});