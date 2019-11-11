$(document).ready(function(){
	//highlight selected tab
	$('.menu > .active').css('background', '#ededed');

	//hamburger menu
	$('.ham').on('click', function(){
		$('.menu').toggleClass('show');
	});
	$('.menu-item').on('click', function(){
		var location = $(this).children().attr('href');
		window.location = location;
	});
	$(document).click(function(e){
		if ($(e.target).closest('ul').attr('id') != 'menu' && $(e.target).closest('ul').hasClass('ham') == false){
			$('#menu').removeClass('show');
		}
	});


	//Contact form submission with ajax
	$('.ajax-form').on('submit', function(e){
		e.preventDefault();

		var form = $(this),
			data = {};

		form.find('[name]').each(function(i, v){
			var input = $(this),
				name = input.attr('name'),
				value = input.val();
				data[name] = value;
		});
		$.ajax({
			url: "https://formcarry.com/s/sVZyDpxyUuK",
			type: "POST",
			dataType: "json",
			data: new FormData(this),
			processData: false,
	        contentType: false,
			beforeSend: function(){
				$('.loader').html('<img src="assets/images/loader.gif">');
			},
			success: function(response){
				$('.ajax-form').trigger('reset');
			},
			error: function(error){
				$('message').html('Sorry! Could not send the message. Please try again.');
			},
			complete: function(clear) {
				$('.loader').html('');
			}
		});
	});


	//share on whatsapp
	var isMobile = {
    Android: function() {
    return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
    return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
    };
    $(document).on("click", '.whatsapp-share', function() {
    if( isMobile.any() ) {

    var text = $(this).attr("data-text");
    var url = $(this).attr("data-link");
    var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
    var whatsapp_url = "whatsapp://send?text=" + message;
    window.location.href = whatsapp_url;
    } else {
    alert("This option is only available on mobile devices.");
    }
    });

});