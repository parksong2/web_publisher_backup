$(document).ready(function(){
     
    var vsn = 0; 
     
    $("section.visual .page").click(function(){
         
        if ( vsn == $(this).index() ) {
            return;
        }
         
        vsn = $(this).index();
         
        visualAni();
         
    });
     
    $("section.visual .next").click(function(){
         
        vsn++;
         
        if (vsn == 3)
            vsn = 0;
         
        visualAni();
         
    });
     
    $("section.visual .prev").click(function(){
         
        vsn--;
         
        if (vsn == -1)
            vsn = 2;
         
        visualAni();
         
    });
     
     
    function visualAni() {
        $("section.visual .slide").fadeOut(500);
        $("section.visual .slide").eq( vsn ).fadeIn(500);
         
        $("section.visual .page.sel").removeClass("sel");
        $("section.visual .page").eq( vsn ).addClass("sel");
    }
    
    $("section.brand .tab").click(function(){
        
        $("section.brand .tab.sel").removeClass("sel");
        $(this).addClass("sel");
        
        $("section.brand .tview.sel").removeClass("sel");
        $("section.brand .tview").eq( $(this).index() ).addClass("sel");
    });
});