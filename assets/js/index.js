
$(document).ready(function(){
    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;
        if(scrollPosition > 10){
            $("header").addClass("site-header")
        }else {
            $("header").removeClass("site-header")
        }
    });
    
})