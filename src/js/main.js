$(document).ready(function() {

	/*** Стилизация checkbox, select ***/
	$('.styled').styler();
	/*** Стилизация checkbox, select  end ***/

});


/* Preloader*/
document.body.onload = function () {

	setTimeout( function () {
		var preloader = document.getElementById('pagePreloader');
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done');
		}
	}, 1000);

};