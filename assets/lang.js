$(document).ready(function(){
	//returns the cookie value
	function getCookie(name){
		var cookieName = name+'=';
		var cookie = document.cookie;
		if (document.cookie.indexOf(cookieName) === 0) {
			var cookieValue = cookie.substring(cookieName.length);
			return cookieValue;
		}
		return '';
	}
	//change the language on the basis of the value of cookie
	function changeLanguage(language){
		var cookieValue = language;
		$.ajax({
			url: 'assets/lang/'+cookieValue+'.json',
			type: 'get',
			dataType: 'json',
			cache: true,
			success: function(data){
				$('[data-key]').each(function(i,v){
					var key = $(this).data('key');
					$(this).html(data[cookieValue][key]);
				});
			},
		});
	}


	//get cookie's value
	var cookieValue = getCookie('kalyaniLanguage');
	//change language
	if (cookieValue) {
		changeLanguage(cookieValue);
	}
	

	$('.lang').on('click', function(){
		//get the user defined language.
		var lang = $(this).data('lang');
		//check if that language is set in a cookie. if not then create one.
		if (document.cookie.indexOf('kalyaniLanguage') === -1) {
			document.cookie = 'kalyaniLanguage='+lang+';path=/';
		}else{
			document.cookie = 'kalyaniLanguage='+lang+';path=/;';
		}
		//get the cookie
		var cookieValue = getCookie('kalyaniLanguage');
		//change language
		changeLanguage(cookieValue);
	});
});