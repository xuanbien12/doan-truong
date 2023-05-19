$(document).ready(function() {
    
    // đưa admin lên quản lí
    const admin = JSON.parse(localStorage.getItem("") || '[]')
    const name = $(".admin-name").text()
    const phoneNumber = $(".admin-phone").text()
    const password = $(".admin-password").text()
    const permission = $(".admin-permission").text()
    const Newadmin = {
        name,
        phoneNumber,
        password,
        permission,
    }
    admin.push(Newadmin)
    localStorage.setItem("admin", JSON.stringify(admin))  
     // render cac user ở local
    const login = JSON.parse(localStorage.getItem("login") || "[]")
    const renderUser = (users) => {
        
        let stt = 0
        const user = users.map(user => {
            return (` 
            
                     <tr class="style-td">
                        <td>${++stt}</td>
                        <td>${user.name}</td>
                        <td>${user.phoneNumber}</td>
                        <td>${user.password}</td>
                        <td>${user.permission}</td>
                        <td class="toolbars-user delete-user" title="${user.name}"><a href=""><i class="fa-solid fa-trash"></i></a></td>
                        </tr>
                 
            `)
        })
        $("#render-user").html(user)
         
    }
    renderUser(login)



   

    $(".user").on("click" , function() {
        $("#render-user").show()
        $("#admin").hide()
        $(this).addClass("bg")
        $(".admin").removeClass("bg")
    })
    $(".admin").on("click",function(){
        $("#render-user").hide()
        $("#admin").show()
        $(this).addClass("bg")
        $(".user").removeClass("bg")
    })
    // xoa user và render lại local
    $(".delete-user").on("click", function() {
        const isMy = $(this).attr("title")
        console.log($(this).attr("title"))
        const user = JSON.parse(localStorage.getItem("login") || "[]")
        const newUser = user.filter((user) => user.name !== isMy)
        localStorage.setItem("login", JSON.stringify(newUser))  
    })

    
    $(".products").on('click', function(){
        window.location.href = './product/product.html'
    })
    $(".add-product").on('click',function(){
        window.location.href= './add-product/addproduct.html'
    })
    $(".add-blog").on('click',function(){
        window.location.href= './add-blog/blog.html'
    })
    $(".feedback").on('click',function(){
        window.location.href= './feedback/feedback.html'
    })
    // check xem có chưa nếu chưa có thì không thêm vô productAdmin để tránh bị mất cái mới add
    const productss = JSON.parse(localStorage.getItem("products") || "[]")
    const products = JSON.parse(localStorage.getItem("productsAdmin") || "[]")
    const check = productss.find(product => {
        const id = product.id
        const check = products.find(product2 => product2.id === id)
        return check
       
    })
    
    if (check ){
        return
        
    }else {
        localStorage.setItem("productsAdmin", JSON.stringify(productss))  
    }
    
    
})