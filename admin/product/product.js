$(document).ready(function(){
    const products = JSON.parse(localStorage.getItem("productsAdmin") || "[]")
    
    const renderProduct = (product) => {
        const newproduct = product.map(product1 => {
            return `
            <tr class="style-td">
            <td>${product1.id}</td>
            <td>${product1.brand}</td>
            <td>${product1.name}</td>
            <td><img class="product-img" src="${product1.img}" alt=""></td>
            <td>${product1.price}</td>
            <td>${product1.del}</td>
            <td class="toolbars-user delete-user" title="${product1.id}"><a href=""><i class="fa-solid fa-trash"></i></a></td>
            </tr>
            `
        })
        $("#render-product").html(newproduct)
    }
    
    renderProduct(products)
    
    $(".admin , .user").on("click",function(){
        window.location.href = "./../admin.html"
    })
    $(".add-product").on("click" , function(){
        window.location.href = "./../add-product/addproduct.html"
    })
    $(".add-blog").on("click" , function(){
        window.location.href = "./../add-blog/blog.html"
    })
    $(".feedback").on("click" , function(){
        window.location.href = "./../feedback/feedback.html"
    })
    $(".delete-user").on("click",function(){
        var products = JSON.parse(localStorage.getItem("productsAdmin") || "[]")
        const check = $(this).attr("title")
        const newproduct = products.filter(product => product.id != check)
        renderProduct(newproduct)
        localStorage.setItem("productsAdmin", JSON.stringify(newproduct))
    })
})