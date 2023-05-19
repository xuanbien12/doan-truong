$(document).ready(function () {
    $(".register-inner").on("click", function () {

        $(".login").hide()
        $(".register").show()
    })
    $(".by-login ").on("click", function () {
        $(".login").show()
        $(".register").hide()
    })

    $(".password-by-phone").on("click", function () {

        $(".email").hide()
        $(".phone").show()
    })
    $(".password-by-email").on("click", function () {
        $(".email").show()
        $(".phone").hide()
    })
    $(".get-name").on("keyup", function () {
        let name = $(this).val()
        $(this).attr("title", name)
    })
    $(".get-email").on("keyup", function () {
        let email = $(this).val()
        $(this).attr("title", email)
    })
    $(".get-tel").on("keyup", function () {
        let tel = $(this).val()
        $(this).attr("title", tel)
    })
    $(".get-password").on("keyup", function () {
        let password = $(this).val()
        $(this).attr("title", password)
    })
    $(".get-password-confirm").on("keyup", function () {
        let password = $(this).val()
        $(this).attr("title", password)
    })

    $(".register-sbmit").on("click", function () {
        var login = JSON.parse(localStorage.getItem("login") || "[]")
        let name = $(".get-name").attr('title')
        let email = $(".get-email").attr("title")
        let tel = $(".get-tel").attr("title")
        let password = $(".get-password").attr("title")
        let passwordConfim = $(".get-password-confirm").attr("title")
        let checkName = login.find((item) => item.name == name)
        let user = {
            name,
            email,
            password,
            passwordConfim,
            tel
        }
        if (name && email && password && passwordConfim) {
            if (!checkName) {
                if(email.includes("@gmail.com")){
                    if (password === passwordConfim) {
                        $(".get-name").val("")
                        $(".get-email").val("")
                        $(".get-password").val("")
                        $(".get-tel").val("")
                        $(".get-password-confirm").val("")
                        login.push(user)
                        localStorage.setItem("login", JSON.stringify(login))
                        $(".login").show()
                        $(".register").hide()
                        alert("Đăng ký thành công tài khoản")
                    } else {
    
                        alert("Mật khẩu không trùng khớp")
                    }
                }else {
                    alert("Gmail không hợp lệ")
                }
            } else {
                alert("Tài khoản đã tồn tại")
            }
        } else {
            alert("Bạn chưa nhập đủ thông tin")
        }
    })




    $(".btn-alert").on("click", function () {
        $(".alert-user").css("display", "none")
    })


    $(".check-name").on("keyup", function () {
        let name = $(this).val()
        $(this).attr("title", name)
    })
    $(".check-password").on("keyup", function () {
        let password = $(this).val()
        $(this).attr("title", password)
    })



    $('.submit-inner').on("click", function () {
        let login = JSON.parse(localStorage.getItem("login" || "[]"))
        let name = $('.check-name').attr("title")
        let password = $(".check-password").attr("title")
        const checkUser = login.find((item) => item.name == name && item.password == password)
        if (checkUser) {
            window.location.href = "./../index.html"
        } else {
            alert("Tài khoản hoặc mật khẩu không chính xác")
        }
    })

    $(".forgot-email").on("keyup", function () {
        const fogotEmail = $(this).val()
        $(this).attr("title", fogotEmail)
    })
    $(".forgot-tel").on("keyup", function () {
        const tel = $(this).val()
        $(this).attr("title", tel)
    })

    $(".submit-forgot-email").on("click", function () {
        const email = $(".forgot-email").attr("title")
        let user = JSON.parse(localStorage.getItem("login" || "[]"))
        const forgotEmail = user.find((item) => item.email == email)
        if(email){
            if (forgotEmail) {
            
                alert("Mật khẩu của bạn là : " + forgotEmail.password)
            } else {
                alert("Không tìm thấy Email của người dùng")
            }
        }else {
            alert("Bạn chưa nhập thông tin")
        }
        $(".forgot-email").val("")
    })
    $(".submit-forgot-tel").on("click", function () {
        const tel = $(".forgot-tel").attr("title")
        let user = JSON.parse(localStorage.getItem("login" || "[]"))
        const forgotTel = user.find((item) => item.tel == tel)
        if(tel){
            if (forgotTel) {
                alert("Mật khẩu của bạn là : " + forgotTel.password)
            } else {
                alert("Không tìm thấy Số điện thoại của người dùng")
            }
        }else {
            alert("Bạn chưa nhập thông tin")
        }
        $(".forgot-tel").val("")
    })
})