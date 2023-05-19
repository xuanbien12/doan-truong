$(document).ready(function () {
   
    var productsInCart = JSON.parse(localStorage.getItem('cart') || '[]')
   
    renderProduct(productsInCart)

    $(".btn-delete").on("click",function(){
        const productId = $(this).data('id')
        productsInCart = productsInCart.filter((item) => item.id != productId)
        renderProduct(productsInCart)
        localStorage.setItem('cart', JSON.stringify(productsInCart))
      
    })
   
    
    // lấy dữ liệu từ localStorage 
    function renderProduct(item) {
        
        let totalPrice = 0;
        let html = item.map((item) => {
            let price = +item.priceNumber
            let quantitys = item.quantity
            totalPrice = price * quantitys;
            
            return `
        <tr>
        <td class="product-remove"><a href="" data-id="${item.id}" class ="btn-delete">x</a></td>
        <td class="product-thumbnail">
            <img style="width: 32px; height: 32px;" src="${item.img}" alt="">
        </td>
        <td class="product-name">
            <a href="${item.linkProduct}">${item.name}</a>
            <p>Size: ${item.size}</p>
        </td>
        <td class="product-price"><span> <span class="price-c">${price.toLocaleString()}</span><span> đ</span></span></td>
        <td class="product-quantity"><input data-id="${item.id}" class="cart-number" type="text" value="${item.quantity}"></td>
        <td class="product-subtotal"><span class="total-price">${totalPrice.toLocaleString()}</span><span> đ</span></td>
        </tr>`;
        }) 
        $("#myCart").html(html)  
    }
    // function a (){{
        
    // }}
    $(".cart-number").on("keyup", function () {
        console.log("aa")
        let number = $(this).val()
        let productId = $(this).data("id")
        const carts = productsInCart.find((item) => item.id == productId)
        carts.quantity = number
        
        renderProduct(productsInCart)
        totalPriceCart($(".total-price"))
        localStorage.setItem('cart', JSON.stringify(productsInCart))
    })
   
// tính tiền khi user nhập số lượng
    // $(".cart-number").on("keyup", function () {
    //     var cart = JSON.parse(localStorage.getItem('cart') || '[]')
    //     let price = $(".price-c").text().replace(/,/g, '');
    //     let number = $(this).val()
    //     let a = $(this).data("id")
    //     console.log(a)
    //     console.log(cart)
    //     var total = price * number
    //    $(".total-price").text(total.toLocaleString())
    //    totalPriceCart($(".total-price"))
    // })
    


// Tính tổng số hàng trong cart
function totalPriceCart(item) {
    let totalPrice = 0
    item.each(function(index ,elemet){
    
        const a = $(elemet).text().replace(/,/g, '');
        totalPrice += +a
   })
   $(".totals-price").text(totalPrice.toLocaleString())
}
totalPriceCart($(".total-price"))


// tính độ dài của cart
    var lengthCart = $("#myCart tr")
   
    if (lengthCart.length >= 1) {
        $(".content-area-inner").hide()
        $(".shop-table").show()
        $(".cart_totals").show()
    } else {
        $(".content-area-inner").show()
        $(".shop-table").hide()
        $(".cart_totals").hide()

    }

    

})