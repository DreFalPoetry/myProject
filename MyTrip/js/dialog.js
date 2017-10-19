 	var i=0;
 	var j=3;
 	function qianjin(){
		     	var b=$(".dialog_content img");
		     	if(i==4){
		     		i=0;
		     		b.eq(i).fadeIn(1000).siblings().fadeOut(1000);
		     	}else{
		     		i=i+1;
		     		b.eq(i).fadeIn(1000).siblings().fadeOut(1000);
		     	}
		     }
 	function houtui(){
		     	var b=$(".dialog_content img");
		     	if(j==-1){
		     		b.eq(3).fadeIn(1000).siblings().fadeOut(1000);
		     		j=3;
		     	}else{
		     		b.eq(j).fadeIn(1000).siblings().fadeOut(1000);
		     		j=j-1;
		     	}
		     }
$(function(){
	$(".close").click(function(){
		$(".dialog").addClass("hidden");
	});
	
	$(".more").click(function(){
		$(".dialog").removeClass("hidden");
	});
});