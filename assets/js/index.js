
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
    
    $(".st-user").on("click",function(){
        $(".setting").toggle();
    })

    const loginMain = JSON.parse(localStorage.getItem("loginMain") || "[]")
    const name = loginMain.name
    const permission = loginMain.permission
    $(".show-permission").hide()
    $(".show-user").html(name)
    if( permission === "admin") {
        $(".show-permission").show()
    }
    $(".set-logout").on("click",function(){
        localStorage.setItem("loginMain", JSON.stringify(""))
    })
   
    const checklength = $(".show-user").text()
    if( checklength <= 0) {
        $(".st-user").hide()
    }
})
