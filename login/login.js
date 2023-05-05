$(document).ready(function(){
    $(".register-inner").on("click",function(){
        
        $(".login").hide()
        $(".register").show()
    })
    $(".by-login ").on("click",function(){
        $(".login").show()
        $(".register").hide()
    })
   
    $(".password-by-phone").on("click",function(){
        
        $(".email").hide()
        $(".phone").show()
    })
    $(".password-by-email").on("click",function(){
        $(".email").show()
        $(".phone").hide()
    })
    $(".get-name").on("keyup" , function(){
        let  name =  $(this).val()
        $(this).attr("title" , name)
    })
    $(".get-email").on("keyup" , function(){
        let  email =  $(this).val()
        $(this).attr("title" , email)
    })
    $(".get-password").on("keyup" , function(){
        let  password =  $(this).val()
        $(this).attr("title" , password)
    })
    $(".get-password-confirm").on("keyup" , function(){
        let  password =  $(this).val()
        $(this).attr("title" , password)
    })
    
    $(".register-sbmit").on("click" , function(){
        var login = JSON.parse(localStorage.getItem("login") || "[]")
        let name = $(".get-name").attr('title')
        let email = $(".get-email").attr("title")
        let password =  $(".get-password").attr("title")
        let passwordConfim = $(".get-password-confirm").attr("title")
        let checkName = login.find((item) => item.name == name)
        console.log(checkName)
        let user = {
            name :  name,
            email: email,
            password: password,
            passwordConfim: passwordConfim
        }
        if( name && email && password && passwordConfim ){
            if( !checkName) {
                
                        
                    if(password === passwordConfim ){
                        $(".get-name").val("")
                        $(".get-email").val("")
                        $(".get-password").val("")
                        $(".get-password-confirm").val("")
                        login.push(user)
                        localStorage.setItem("login", JSON.stringify(login))
                        $(".login").show()
                        $(".register").hide() 
                    }else {
                        
                        alert("Mật khẩu không trùng khớp")
                    }
            }else {
                alert("Tài khoản đã tồn tại")
            }
        }else {
            alert("Bạn chưa nhập đủ thông tin")
        }
    })



    
    $(".btn-alert").on("click", function(){
        $(".alert-user").css("display" , "none")
    })


    $(".check-name").on("keyup" , function(){
        let  name =  $(this).val()
        $(this).attr("title" , name)
    })
    $(".check-password").on("keyup" , function(){
        let  password =  $(this).val()
        $(this).attr("title" , password)
    })


    
    $('.submit-inner').on("click" , function() {
        let login = JSON.parse(localStorage.getItem("login" || "[]"))
        let name = $('.check-name').attr("title")
        let password = $(".check-password").attr("title")
        const checkUser = login.find((item) => {
            if( item.name == name && item.password == password){
                return true
            }
        })
        if(checkUser ) {
            window.location.href = "./../index.html"
        }else {
            alert("Tài khoản hoặc mật khẩu không chính xác")
        }
    })
})