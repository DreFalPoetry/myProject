 	var i=0;
 	var j=11;
 	function qianjin(){
		     	var b=$(".dialog_content img");
		     	if(i==12){
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
		     		b.eq(11).fadeIn(1000).siblings().fadeOut(1000);
		     		j=11;
		     	}else{
		     		b.eq(j).fadeIn(1000).siblings().fadeOut(1000);
		     		j=j-1;
		     	}
		     }
