/*



*/

function loadPage(){
    $(window).on('load', function(e){
        $('#loadPage').removeClass('loading');
        setTimeout(function(){
            $('body').removeClass('loading');
        },300);
    });
}
function scrollAnimate(element, boxReference, distEfeito){
    if($(element).length){
        $(window).scroll(function(){
            var scrollAtual = $(this).scrollTop();
            $(element).each(function(){
                var refOffset = $(this).offset().top - distEfeito;
                // Animacao secao
                if(scrollAtual >= refOffset){
                    $(this).addClass('animate');
                    // Animacao boxs
                    var indice = 0;

                    $(this).find(boxReference).each(function(){
                        var $this = $(this);
                        var delayAnimate = indice+=99;
                        setTimeout(function(){
                            $this.addClass('animate');
                        },delayAnimate+10);
                        indice++;
                    });
                }else{
                    $(this).removeClass('animate');
                    $(this).find(boxReference).each(function(){
                        $(this).removeClass('animate');
                    });
                }
            });
        });
    }
}
$(function(){
    loadPage();
    var refTela = $(window).outerWidth();

    if(refTela > 670){
        var $distRef = 400;
    }else{
        var $distRef = 400;
    }

    scrollAnimate('.animateSet', '.boxAnimate', $distRef);
});