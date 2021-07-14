var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 500; // Задержка прокрутки
$(document).ready(function() {
    $(window).scroll(function() { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#button-up').fadeIn();
        else $('#button-up').fadeOut();
    });
    $('#button-up').click(function() { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // получим кнопку id="btn" с помощью которой будем открывать модальное окно
    const btn1 = document.querySelector('#btn-1');
    const btn2 = document.querySelector('#btn-2');
    // активируем контент id="modal" как модальное окно
    const modal = new bootstrap.Modal(document.querySelector('.modal'));
    // при нажатии на кнопку
    btn1.addEventListener('click', function() {
        // открываем модальное окно
        modal.show();
    });
    btn2.addEventListener('click', function() {
        // открываем модальное окно
        modal.show();
    });
});