// JavaScript Document

$(document).ready(function(){
	
	$(window).scroll(function(){
	
		var scrollTop = $(window).scrollTop();
		
		if (scrollTop >= 100){
			$("header").addClass("small");
			$("header nav .gnb").css("font-size", "13px");
		} else {
			$("header").removeClass("small");	
			$("header nav .gnb").css("font-size", "15px");
		}
		
		if (scrollTop >= 200){
			$("section.visual .title").fadeOut(500);
		} else {
			$("section.visual .title").fadeIn(500);
		}
				
	});
	
	$("section.visual .bg").mousemove(function(e){
	
		var pointer = $(window).width() /2 - e.clientX;
		
		$("section.visual .bg").css("transform", "translate3d("+pointer/40+"px, 0, 0)");
		
	});
		
	$(".prev").click(function(){
				
		$(".inner").stop().animate({
			left: 0
		});
		
	});
	
	$(".next").click(function(){
	
		$(".inner").stop().animate({
			left: -100
		});
		
		$(".prev").fadeIn(100);
		
	});
	
	
});