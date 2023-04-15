$(document).ready(function () {
    var cart = new Array
    // đưa dữ liệu lên localStorage lưu trữa
    function addCart() {
        var img = $(".inf-img-inner img").attr("src")
        var name = $(".prodcut-title").text()
        var price = $(".car-price").text()
        var priceNumber = $(".car-price").text().replace(/\s+/g, '')
        var size = $(".active").text()
        var quantity = $(".iput-nb").attr("value")
        var linkProduct = $(".link-product").attr("href")
        var sp = new Array(img, name,price , priceNumber, size, quantity,linkProduct)
        cart.push(sp)
        localStorage.setItem("cart", JSON.stringify(cart))
        window.location.href= "./../cart/cart.html"
    }
    // lấy dữ liệu từ localStorage 
    function showcart() {
        let showcarts = localStorage.getItem('cart')
        let gh = JSON.parse(showcarts) 
        let totalPrice = 0;
        let html = gh.map((item) => {                                                       
            
            let price= +item[3]
            let quantitys = item[5]
            totalPrice = price * quantitys;
            
            return `
        <tr>
        <td class="product-remove">x</td>
        <td class="product-thumbnail">
            <img style="width: 32px; height: 32px;" src="${item[0]}" alt="">
        </td>
        <td class="product-name">
            <a href="${item[7]}">${item[1]}</a>
            <p>Size: ${item[5]}</p>
        </td>
        <td class="product-price"><span> <span>${item[3]}</span><span> đ</span></span></td>
        <td class="product-quantity"><input type="text" value="${item[5]}"></td>
        <td class="product-subtotal">${totalPrice.toLocaleString()}<span> đ</span></td>
        </tr>`; 
        })
        $("#myCart").html(html)
        
    }
    showcart()
    // $(".product-remove").on("click", function(){
    //     var a = $(this).parentElement
    //     a.remove()
    // })
    $(".add-to-cart").on("click", function () {
        addCart()
    })

})