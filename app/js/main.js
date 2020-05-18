$(function(){

	$('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			 bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700)
		return false;
	});

(function($) {
	$(function() {
	
		$('.company__scroll').click(function() {
			$('html, body').animate({scrollTop: 0},700);
			return false;
		})
	
	})
	})(jQuery);

	$('.menu__burger').click(function(event){
		$('.menu__burger, .menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$('.still').click(function(event){
		$('.skills__items').toggleClass('active');
	});

});