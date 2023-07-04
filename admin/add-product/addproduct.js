$(document).ready(function(){
    $(".admin , .user").on("click",function(){
        window.location.href = "./../admin.html"
    })
    $(".products").on("click" , function(){
        window.location.href = "./../product/product.html"
    })
    $(".add-blog").on("click" , function(){
        window.location.href = "./../add-blog/blog.html"
    })
    $(".feedback").on("click" , function(){
        window.location.href = "./../feedback/feedback.html"
    })
    let id1 = 35
    localStorage.setItem("id2" , JSON.stringify(id1))
    $("#form").on('submit' , function(e) { 
        e.preventDefault()
        let id = JSON.parse(localStorage.getItem("id2"))
        var addproduct = JSON.parse(localStorage.getItem("productsAdmin") || "[]")
        ++id
        const name = $(".add-name").val()
        const brand = $(".add-brand").val()
        const img = $(".add-img").val()
        const price = $(".add-price").val()
        const del = $(".add-pricedel").val()
        const add = {
            id,brand,img,name,del,price
        }
        
        if( !name || !brand || !img || !price || !del  ) {
           alert("Bạn chưa nhập đủ thông tin")
           $(".notification").css("display","none")
           return
        }
        addproduct.push(add)
        localStorage.setItem("productsAdmin", JSON.stringify(addproduct))
        $(".add-name").val("")
        $(".add-brand").val("")
        $(".add-img").val("")
        $(".add-price").val("")
        $(".add-pricedel").val("")
       $(".notification").css("display","block")
       $(".show-monney").text("="+ " " + 0 + "đ")
       $(".show-del").text("="+ " " + 0 + "đ")
       localStorage.setItem("id2" , JSON.stringify(id))
       
    })
    $(".add-price").on("keyup" ,function(){
        const value = +$(this).val()
        $(".show-monney").text("="+ " " + value.toLocaleString() + "đ")
    })
    $(".add-pricedel").on("keyup" ,function(){
        const value = +$(this).val()
        
        $(".show-del").text("="+ " " + value.toLocaleString() + "đ")
    })
    
})