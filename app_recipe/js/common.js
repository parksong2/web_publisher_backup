// JavaScript Document

$(document).ready(function(){
		
	$(".listview .list").click(function(){
		
		var title = $(this).find(".subject").text();
		var src = $(this).find(".thumb img").attr("src");
	
		$(".page.detail").find(".title").text(title);
		$(".page.detail").find(".image img").attr("src", src);
	
		$(".page.detail").addClass("active");
		
		$("header .hambuger").removeClass("on");
		$(".drawer").removeClass("on");
		
	});
	
	$("header button.back").click(function(){
		$(this).parent().parent().removeClass("active");
	});
	
	$("header .hambuger").click(function(){
		$(this).addClass("on");
		$(".drawer").addClass("on");
	});
	
	$(".drawer").click(function(){
		$(this).removeClass("on");
		$("header .hambuger").removeClass("on");
	});
	
});