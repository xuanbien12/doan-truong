$(document).ready(function(){
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
        $(".add-product").on("click" , function(){
            window.location.href = "./../add-product/addproduct.html"
        })
    })
})