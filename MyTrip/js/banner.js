				$(function(){
					
					$('.radius_two').find('div').mouseover(function(){
					 	clearInterval(timer);
		      	    var index2=$(this).index();
		      	    $(this).addClass('current').siblings().removeClass("current");
		      	    $('.banner_img').find('img').eq(index2).fadeIn(1000).siblings('img').fadeOut(1000);
		     	    }).mouseout(function(){
		     	    	play();
		     	    });
		     	    
				});
				var index =0;
			  function play(){
			    timer = setInterval(function(){
						index++;
						
						if(index<3){
							$('.banner_img').find('img').eq(index).fadeIn(1500).siblings('img').fadeOut(1500);
							$('.radius_two').find("div").eq(index).addClass('current').siblings().removeClass("current");
						}
						else{
							index=-1;
						}
					},3000);
				}
		       play();