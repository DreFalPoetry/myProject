$(function(){
	function aa(){
		var winH=$(window).height();
		var winW=$(window).width();
		$(".container").height(winH);
		$(".container").width(winW);
	}
	aa();
	$(window).resize(function(){
		aa();
	});
});