$(document).ready(function(){
	    //initialize video popup
    $('.video-link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	//initialize image popup
	$('.image-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		gallery:{enabled:true}
	});
});