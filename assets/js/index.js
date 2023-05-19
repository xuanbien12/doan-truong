
$(document).ready(function(){
    
    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            $("header").addClass("site-header")
            $(".rs-navbar-b").css('display', 'none')
            $(".search").addClass("d-n")
            
        } else {
            $("header").removeClass("site-header")
            $(".rs-navbar-b").css('display', 'block')
            $(".search").removeClass("d-n")
            
        }
    });
    $(".rp-bars-st").on("click",function(){
         $(".show-list").css("left","0")
         $(".xmark").css("right","0")
    })
    $(".xmark").on("click", function(){
        $(".show-list").css("left","-100%")
    })
    
    
})
