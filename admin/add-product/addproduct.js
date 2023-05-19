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
    $("#form").on('submit' , function(e) { 
        e.preventDefault()
        
        var addproduct = JSON.parse(localStorage.getItem("productsAdmin") || "[]")
        const id = ++id1
        const name = $(".add-name").val()
        const brand = $(".add-brand").val()
        const img = $(".add-img").val()
        const dataPrice = $(".add-price").val()
        const price = $(".add-price").val()
        const del = $(".add-price").val()
        const add = {
            id,name,brand,img,dataPrice,del,price
        }
        addproduct.push(add)
        
        
        localStorage.setItem("productsAdmin", JSON.stringify(addproduct))
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