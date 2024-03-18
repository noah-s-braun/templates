//document.getElementById('test').style.color = 'blue';
$(document).ready(function(){

    $('.zoom').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('pop');
    });

    $(window).on('scroll', function(){
        $('.zoom').removeClass('pop');
    })

    $('.hamburger').on('click', function(e){
        e.preventDefault();
        $('nav').toggleClass('closed');
    })
});