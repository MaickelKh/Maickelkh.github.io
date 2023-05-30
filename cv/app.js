
let i = 0;
let timer;
let images = ["img/hehprojet.png", "img/mkrprono.png"];

function changerSlide(){
    document.getElementById("slide").src=images[i];
    
    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }
    timer = setTimeout("changerSlide()", 3500);
}

$(document).ready(function(){
    changerSlide()
    if ($(window).width() <= 100) {
        $(window).scroll(function(){
            if($(window).scrollTop() > 310){
                $('.progLang').each(function(){
                    $(this).find('.progLang-bar').animate({
                        width:$(this).attr('pourcent')
                    },6000);
                });
            }
        });
    } else {
        $('.progLang').each(function(){
            $(this).find('.progLang-bar').animate({
                width:$(this).attr('pourcent')
            },6000);
        });
    }
});
