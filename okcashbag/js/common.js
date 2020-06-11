$(document).ready(function() {
    
    $("header").load("header.html", function(){       
        $("header nav .gnb").mouseenter(function(){
            $("header .draw").slideDown(400);
        });
        
        $(".draw-inner").mouseleave(function(){
            $("header .draw").slideUp(400);
        });
    });
    $("footer").load("footer.html");
 
});