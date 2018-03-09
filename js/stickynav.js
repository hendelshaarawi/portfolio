$( document ).ready(function() {

        // Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('.sticky').offset().top; //startpunt animatie CLASS of ID
 
        $(window).scroll(function(){
                if( $(window).scrollTop() > stickyHeaderTop ) {
                        $('header').css({
                        	'background-color' :'#f6f6f6'                          }); //KLEUR BENEDEN
                        $('header').addClass('animated');
                } else {
                	$('header').removeClass('animated');

                }
        });

        var stickyHeaderTop = $('.sticky').offset().top;
        $(window).scroll(function(){
                if( $(window).scrollTop() < stickyHeaderTop ) {
                        $('header').css({'background-color' : 'rgba(255, 255, 255,0.1)'}); //kleur terug naar boven
                    }
        });


    console.log( "ready!" );
});