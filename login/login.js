$(document).ready(function(){
    $(".register-inner").on("click",function(){
        
        $(".login").hide()
        $(".register").show()
    })
    $(".register-sbmit").on("click",function(){
        $(".login").show()
        $(".register").hide()
    })
    $(".submit-inner").on("click", function(){
        window.location.href = "./../index.html"
    })
    $(".password-by-phone").on("click",function(){
        
        $(".email").hide()
        $(".phone").show()
    })
    $(".password-by-email").on("click",function(){
        $(".email").show()
        $(".phone").hide()
    })
})