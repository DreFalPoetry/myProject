$(function(){
	$(".photos_div").mouseenter(function(){
		$(this).find(".dia_img").show();
		$(this).find(".e").show();
		$(this).find(".e").animate({
			top: "50%",left: "50%",marginLeft:"-18px",marginTop: "-18px",
		},200);
	}).mouseleave(function(){
		$(this).find(".dia_img").hide();
		$(this).find(".e").hide();
		$(this).find(".e").animate({
			top: "70px",left: "-32px"
		},10)
	});
});