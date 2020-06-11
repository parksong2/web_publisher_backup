$(document).ready(function(){
		

	$(window).scroll(function(){
	
		var scrollTop = $(window).scrollTop();
		
		if (scrollTop >= 100){
			$("header").addClass("small");
		} else {
			$("header").removeClass("small");
		}
		
		if (scrollTop >= 200){
			$("section.visual .title").fadeOut(500);
		} else {
			$("section.visual .title").fadeIn(500);
		}
	});
	
	$("section.visual .bg").mousemove(function(e){
		
		var pointer = $(window).width() / 2 - e.clientX;
		
		$(this).css("transform", "translate3d("+pointer/40+"px, 0, 0)");
		
	});
	
	$(".next").click(function(){
		$(this).parent().find(".inner").addClass("moved");
		$(this).fadeOut(0);
		$(this).parent().find(".prev").fadeIn(0);
	});
	
	$(".prev").click(function(){
		$(this).parent().find(".inner").removeClass("moved");
		$(this).fadeOut(0);
		$(this).parent().find(".next").fadeIn(0);
	});
	
	
	
		
});
