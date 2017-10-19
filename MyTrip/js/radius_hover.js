$(function(){
	//圆形的白色框滑过效果
	$(".radius_li").mouseenter(function(){
		$(this).find(".radius_hover").removeClass("hidden");
		$(this).find(".more").fadeIn(500);
		$(this).find(".radius_hover").animate({
			width: "200px",
			height: "200px",
			marginLeft: "-101px",
			marginTop: "-101px"
		},500);
	}).mouseleave(function(){
		$(this).find(".radius_hover").addClass("hidden");
		$(this).find(".more").fadeOut(500);
		$(this).find(".radius_hover").animate({
			width: "140px",
			height: "140px",
			marginLeft: "-71px",
			marginTop: "-71px"
		},10);
	});
})
