
var host = "edl13.github.io";
if ((host == window.location.host) && (window.location.protocol != "https:"))
    window.location.protocol = "https";

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll>5){
		//$('#custom-bootstrap-menu').addClass('menuScrolled');
		//$('#custom-bootstrap-menu.navbar-default .navbar-nav>li>a').addClass('linkScrolled');
		//$('.navlogoblack').removeClass('logoScrolled');
		//$('.navlogowhite').addClass('logoScrolled');
	}else{
		//$('#custom-bootstrap-menu').removeClass('menuScrolled');
		//$('#custom-bootstrap-menu.navbar-default .navbar-nav>li>a').removeClass('linkScrolled');
		//$('.navlogoblack').addClass('logoScrolled');
		//$('.navlogowhite').removeClass('logoScrolled');	
	}
	
	if(scroll>250){
		$('.navlogo').removeClass('logo-transparent');
	}else{
		$('.navlogo').addClass('logo-transparent');
	}
	
});

