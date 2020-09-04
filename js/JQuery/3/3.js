$(document).ready(function(){
    //Базовая Анимация
    // $('.box:first').delay(1000).hide(5000).delay(1000).show(1000)
    //$('.box:first').delay('slow').hide('fast').delay(1000).show(1000)

    //$('.box:first').animate({'width': '200px'}, 1000)//кнопки изменяется в ширину
    //$('.box:first').slideUp(1000).slideDown(1000)

    //Взаимодействие с Фтрибутами
    //console.log($('img').attr('src'));
    //  $('img').click(function(){
    //     $(this).fadeOut(500, function(){
    //         $(this).attr('src', 'img2.jpg').fadeIn(500);
    //     });
    //  }); очень круто

    //$('p.lead').attr('data-target', 'text');
    
    // $('p.lead').addClass('blue')

    // $('.lead').click(function(){
    //     $('p.lead').addClass('blue')
    // });// при наличии css свойст при клике добавляет класс blue делая текст синим

    

    //Взаимодействие с классами
    // $('.lead').click(function(){
    //     //$(this).toggleClass('lead blue')
    //     //$(this).removeClass('lead')
    // });

    //Клонирование, добавление, перемещение элементов

    $('.lead').click(function(){
        //$(this).text('Свой собственный текст');
        //$(this).html('Свой собственный <em>текст</em>');
        //$(this).append();
        //$(this).prepend('Начальный текст ');
        //$(this).after('<p>Новый текст</p>');
        //$(this).wrap('<div class="container"></div>');
        //$(this).unwrap(); убрать обертку ввиде divва
        //$(this).empty();
        //$(this).remove();
        //$(this).append('<br />' +$(this).text());
    });

});