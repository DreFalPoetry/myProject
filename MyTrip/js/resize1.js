$(function(){
	//高度自适应布局
	function init(){
		 var win_h=$(window).height();
		 var main_h=win_h-90;
		 $(".main").height(main_h);
	}
	 init();
	 $(window).resize(function(){
	 	init();
	 });
});
