$(document).ready(function(){
    $(".link-signup").on("click",function(){
        $(".form-sigup").css("display","block")
        $(".form-login").css("display","none")
        $(".title-login").text("Sign Up")
    })
    $(".link-login").on("click" ,function(){
        $(".form-sigup").css("display","none")
        $(".form-login").css("display","block")
        $(".title-login").text("Log In")
        
    })
   

   
   // lấy các thông tin ng dùng đăng ký
//    e.preventDefault()
    $(".form-sigup").on('submit' , function(e) { 
        e.preventDefault()
       
        const login = JSON.parse(localStorage.getItem("login") || "[]")
        const admin = JSON.parse(localStorage.getItem("admin") || "[]")
        const name = $(".get-name-sigup").val()
        const phoneNumber = $(".get-phonenumber-sigup").val()
        const password = $(".get-password-sigup").val()
        const password2 = $(".get-password2-sigup").val()
        const permission = "user"
        const user = {
            name,phoneNumber,password,password2,permission
        }
        if(!name && !phoneNumber && !password && !password2) {
            $(".alert").show()
            
            return
        }
        if(phoneNumber.length > 10  || phoneNumber.length < 10){
            $(".alert-phone").show()
            $(".alert").hide()
            return
        }
        $(".alert-phone").hide()
        if(password != password2) {
            $(".alert-password").show()
            $(".alert").hide()
            return
        }
        const checkName = login.find((user) => user.name === name)
        const checkAdminName = admin.find((user) => user.name === name)
        const checkAdminPhone = admin.find((user) => user.phoneNumber === phoneNumber)

        const checkPhone = login.find((user) => user.phoneNumber === phoneNumber)
        
        if(checkName || checkAdminName) {
            $(".alert").hide()
            $(".alert-already").show()
            
            return
            
        }
        if(checkPhone ||checkAdminPhone) {
            $(".alert-already").hide()
            $(".alert").hide()
            $(".alert-phone-exists").show()
            
            return
        }
        $(".alert-phone-exists").hide()
        $(".alert-already").hide()
         $(".alert-password").hide()
         $(".alert-phone").hide()
        $("alert-phone-exists").hide()
        login.push(user)
        localStorage.setItem("login", JSON.stringify(login))
        $(".notification").css("right","0")
        setTimeout(function(){$(".notification").css("right","-30%") }, 3000);
        $(".get-name-sigup").val("")
        $(".get-phonenumber-sigup").val("")
        $(".get-password-sigup").val("")
        $(".get-password2-sigup").val("")
    })

    


    // lấy các tài khoản xuống
    const login = JSON.parse(localStorage.getItem("login") || "[]")
    const admin = JSON.parse(localStorage.getItem("admin") || "[]")
    
    const loginMain = [
        ...login,
        ...admin
    ]
    // đăng nhập
    $(".form-login").on("submit" , function(e){
        e.preventDefault()
        
        const checkName = $(".check-name-login").val()
        const checkPassword = $('.check-password-login').val()
        if( !checkName || !checkPassword) {
            $(".alert").show()
            return
        }
        const check = loginMain.find((user) => user.name === checkName && user.password === checkPassword  || user.phoneNumber === checkName && user.password === checkPassword )
        if(check) {
        localStorage.setItem("loginMain", JSON.stringify(check))
        $(".notification-login").css("right","0")
        setTimeout(function(){$(".notification-login").css("right","-30%") }, 3000);
        setTimeout(function(){window.location.href = "./../../index.html" }, 4000);
        return
       } else {
        $(".alert-show").show()
       }
        
       
    })
})