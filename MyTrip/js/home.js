$(function(){
	
	//banner部分特效
	var index=0;
	function change(){
		timer=setInterval(function(){
			index++;
			if(index<2){
				$(".banner_img").find("img").eq(index).fadeIn().siblings().fadeOut();
				$(".radius_two").find("div").eq(index).addClass("current").siblings().removeClass("current");
				$(".text_two").find("div").eq(index).removeClass("hidden").siblings().addClass("hidden");
			}
			else{
				index=-1;
			}
		},2000)
	}
	change();
	
	$(".radius_two").find(".radius1").mouseover(function(){
		clearInterval(timer);
		$(this).addClass("current").siblings().removeClass("current");
		 index1=$(this).index();
		 $(".text_two").find(".main_text").eq(index1).removeClass("hidden").siblings().addClass("hidden");
	}).mouseout(function(){
		change();
	});
	
	//底部提交框
	$(".txt1").focus(function(){
		if($(this).val()=="邮箱地址"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("邮箱地址");
		}
	});
	//下边的大图动的效果
	$(".container").scroll(function(){
		console.log($(this).scrollTop());
		var Topscroll=$(this).scrollTop();
			if(Topscroll>1300){
				$(".dong_img").animate({top:"-50px"
				},5000);
			}
	});

	//圆形的白色框滑过效果
	$(".tripimg").mouseenter(function(){
		$(this).find(".radius_hover").removeClass("hidden");
		$(this).find(".radius_hover").animate({
			width: "160px",
			height: "160px",
			marginLeft: "-81px",
			marginTop: "-81px"
		},500);
	}).mouseleave(function(){
		$(this).find(".radius_hover").addClass("hidden");
		$(this).find(".radius_hover").animate({
			width: "140px",
			height: "140px",
			marginLeft: "-71px",
			marginTop: "-71px"
		},10);
	});
});