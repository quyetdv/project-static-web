
$(function() {
	// Load header.html, footer.html, menu.html
	$('#header').load('header.html');
	$('#footer').load('footer.html');
	$('#sidebar').load('sidebar.html');
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200){  
            $('.logoHeader img').addClass("sticky");
            $('#header').addClass('shadow');
        }
        else{
            $('.logoHeader img').removeClass("sticky");
            $('#header').removeClass('shadow');
        }
    });
	// Back to Top
	if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
    backToTop = function () {
    	var scrollTop = $(window).scrollTop();
    	if (scrollTop > scrollTrigger) {
    		$('#back-to-top').addClass('show');
    	} else {
    		$('#back-to-top').removeClass('show');
    	}
    };
    backToTop();
    $(window).on('scroll', function () {
    	backToTop();
    });
    $('#back-to-top').on('click', function (event) {
    	event.preventDefault();
    	$('html,body').animate({
    		scrollTop: 0
    	}, 700);
    });
	}
    // Load WOW JS
    new WOW().init();
});