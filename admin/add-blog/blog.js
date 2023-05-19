$(document).ready(function(){
    $(document).ready(function(){
        $(".admin , .user").on("click",function(){
            window.location.href = "./../admin.html"
        })
        $(".products").on("click" , function(){
            window.location.href = "./../product/product.html"
        })
        $(".feedback").on("click" , function(){
            window.location.href = "./../feedback/feedback.html"
        })
        $(".add-product").on("click" , function(){
            window.location.href = "./../add-product/addproduct.html"
        })
    })
})