$(document).ready(function(){
    $(".next-login").on("click",function(){
        window.location.href = './../login/login.html'
    })
    const titlePage = $(".title-form").text()
    $(".title-login").text(titlePage)
    
})

