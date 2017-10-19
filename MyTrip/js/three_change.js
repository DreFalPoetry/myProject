			$(function(){
				$(".photo_nav").find("li").mouseenter(function(){
					clearInterval(timer);
				 	$(".photo_nav").find("li").removeClass("great_bg");
				 	$(this).addClass("great_bg");
				 	var index=$(this).index();
				 	$(".photos_wrap").find(".photos").addClass("hidden");
				 	$(".photos_wrap").find(".photos").eq(index).removeClass("hidden");
				}).mouseleave(function(){
						change();
				});
				$(".photos_wrap").find(".photos").mouseover(function(){
					clearInterval(timer);
					$(".dia_img").click(function(){
						$(".dialog").removeClass("hidden");
					});
				}).mouseout(function(){
					if($(".dialog").hasClass("hidden")){
						change();
					}
					else{
						clearInterval(timer);
					}
				});
				
				$(".close").click(function(){
					$(".dialog").addClass("hidden");
				});
				
				
				
				$(".team_person li").mouseenter(function(){
					clearInterval(timer2);
					var index3=$(this).index();
					$(".team_person li").find("i").addClass("person_dia");
					$(this).find("i").removeClass("person_dia");
					$(".team_word p").eq(index3).fadeIn(1000).siblings().fadeOut(1000);
				}).mouseleave(function(){
					changeone();
				});
			});
			var index1=0;
			function changeone(){
				timer2=setInterval(function(){
					index1++;
		    		if(index1<4){
		    			$(".team_person").find("li").find("i").addClass("person_dia");
		    			$(".team_person").find("li").eq(index1).find("i").removeClass("person_dia");
		    			$(".team_word").find("p").eq(index1).fadeIn(1000).siblings().fadeOut(1000);
		    		}
		    		else{
		    			index1=-1;
		    		}
		    	},3000)
		    }
			changeone();	

			var index=0;
		    function change(){
		    timer =	setInterval(function(){
		    		index++
		    		if(index<4){
		    			$(".photo_nav").find("li").eq(index).addClass("great_bg").siblings().removeClass("great_bg");
		    			$(".photos_wrap").find(".photos").eq(index).removeClass("hidden").siblings().addClass("hidden");
		    		}
		    		else{
		    			index=-1;
		    		}
		    	},3000)
		    }
			change();
			
