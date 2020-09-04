$(document).ready(function(){
    //События
    //Клики мышью(click, dblclick)
    // $('h2').click(function(){
    //     // console.log('Ты кликнул по заголовку');
    //     //$(this).toggleClass('blue') заголовок при двойном клике становится синим, обратно черный
    //     console.log('синий');
        
    // });

    //Полеты над элементами (mouseenter, mouseleave и тд)
    // $('h2').mouseenter(function () { 
    //     $(this).toggleClass('blue')//при наведении меняет цвет, мышь уходит цвет попрежнему остается, при повторном наведении меняется цвет на черный (обратно)
    // });

    // $('h2').mouseleave(function () { 
    //     $(this).toggleClass('blue')//меняет цвет при наведении и убирании (синий/ черный)
    // });

    //Формы (focus, change и тд)
    // $('input').focus(function(){
    //     console.log('Поле в фокусе');
    // });
    // $('input').change(function(){
    //     $('#userName').text(', ' + $(this).val());
    // });
    //Клавиатура (keypress, keydown, keyup)

    $('input').keyup(function () { 
        $('#userName').text(', ' + $(this).val());
    });
    
})