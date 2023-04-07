
$(document).ready(function(){
    window.addEventListener("scroll", function() {
        var scrollPosition = window.scrollY;
        if(scrollPosition > 10){
            $("header").addClass("site-header")
        }else {
            $("header").removeClass("site-header")
        }
    });
    
    $(".toggle1").on("click" , function(){
        $(".toggle1-perform").toggle()
    })
    $(".toggle2").on("click" , function(){
        $(".toggle2-perform").toggle()
    })
    $(".toggle3").on("click" , function(){
        $(".toggle3-perform").toggle()
    })
    $(".toggle4").on("click" , function(){
        $(".toggle4-perform").toggle()
    })
    $(".toggle5").on("click" , function(){
        $(".toggle5-perform").toggle()
    })


    
})