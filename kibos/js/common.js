$(document).ready(function(){
     
    $("header").load("header.html", function(){
         
        var url = location.href;
        var html = url.substr( url.lastIndexOf("/") + 1 ) ;
         
        if ( html == "kibos.html" || html == "greeting.html" || html == "history.html" || html == "kibosWay.html") {
            $("nav .gnb").eq(0).addClass("sel");
        } else if (html == "brandmain.html") {
            $("nav .gnb").eq(1).addClass("sel")
        } else if (html == "customerMain.html") {
            $("nav .gnb").eq(2).addClass("sel")
        } else if (html == "kibos_story.html") {
            $("nav .gnb").eq(3).addClass("sel")
        } else if (html == "notice_list.html") {
            $("nav .gnb").eq(4).addClass("sel")
        }
        
        $("header .brand-btn").click(function(){
            $(this).toggleClass("on");
        });
         
    });
     
    $("footer").load("footer.html", function(){
        $("footer .family-menu").click(function(){
            if ( $(".fmenu.-wrap").css("display") == "none" )
                $(".fmenu-wrap").fadeIn(0);
            else
                $(".fmenu-wrap").fadeOut(0);
        });
        
        $("footer .family-menu").mouseleave(function(){
            $(".fmenu-wrap").fadeOut(0);
        });
    });
     
    $(".content.history .tab").click(function(){
        var tn = $(this).index();
        $(".content.history .tab.sel").removeClass("sel");
        $(this).addClass("sel");
        $(".content.history .tview.sel").removeClass("sel");
        $(".content.history .tview").eq(tn).addClass("sel");
    });
                   
    $(".content.kibosWay .tab").click(function(){
        var tn = $(this).index();
        $(".content.kibosWay .tab.sel").removeClass("sel");
        $(this).addClass("sel");
        $(".content.kibosWay .tview.sel").removeClass("sel");
        $(".content.kibosWay .tview").eq(tn).addClass("sel");
    });
    
    $(".content.story .tab").click(function(){
        $(".content.story .tab.sel").removeClass("sel");
        $(this).addClass("sel");
        
        var ft = $(this).attr("filter");
        
        $(".content.story .com").fadeOut(0);
        $(".content.story ." + ft).fadeIn(0);
    });
    
    $("article").height( parseInt($("article .cont").css("top")) + $("article .cont").height() + 40 );
                   
});