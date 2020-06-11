$(document).ready(function(){
    
    $(".content.brand .each .tab").click(function(){
        
        var tn = $(this).index();
        
        $(".content.brand .each .tab.sel").removeClass("sel");
        $(this).addClass("sel");
        
        $(".content.brand .each .tview.sel").removeClass("sel");
        $(".content.brand .each .tview").eq(tn).addClass("sel");
    });
    
});