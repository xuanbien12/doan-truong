
$(document).ready(function(){
    
    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;
        if(scrollPosition > 100){
            $("header").addClass("site-header")
            $(".search").addClass("d-n")
            $(".rs-contact").hide()
        }else {
            $("header").removeClass("site-header")
            $(".search").removeClass("d-n")
            $(".rs-contact").show()
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
