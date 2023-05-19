$(document).ready(function(){
    $(".next-login").on("click",function(){
        window.location.href = './../login/login.html'
    })
    const titlePage = $(".title-form").text()
    $(".title-login").text(titlePage)
    

   $(".show-password").hide()
    $(".form").on('submit' , function(e) { 
        e.preventDefault()
        const login = JSON.parse(localStorage.getItem("login") || "[]")
        const checkPassword = $(".check-password-user").val()

        const resultsCheck = login.find(user => user.phoneNumber === checkPassword)
        
        if(resultsCheck){
            $(".render-password").text(resultsCheck.password)
            setTimeout(function(){$(".show-password").show() }, 1000);
            
            return
        }
        $(".show-password").hide()
        $(".alert").show()
        
       
    })
})

