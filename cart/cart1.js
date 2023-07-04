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
            <a href="./../product/product${item.id}.html">${item.name}</a>
            <p>Size: ${item.size}</p>
        </td>
        <td class="product-price"><span> <span class="price-c">${price.toLocaleString()}</span><span> đ</span></span></td>
        <td class="product-quantity"><input data-id="${item.id}" class="cart-number" type="text" value="${item.quantity}"> 
            <span class="change-sl">
                <span  class="up" data-id="${item.id}" ><i class="fa-solid fa-caret-up "></i></span>
                <span  class="down" data-id="${item.id}"><i class="fa-solid fa-caret-down " ></i></span>
            </span>
       </td>
        <td class="product-subtotal"><span class="total-price">${totalPrice.toLocaleString()}</span><span> đ</span></td>
        </tr>`;
        }) 
        $("#myCart").html(html)  
        
    }

    function totalPriceCart(item) {
        let totalPrice = 0 ;
        item.forEach(item => {
            totalPrice += +item.priceNumber * item.quantity
        })
        $(".totals-price").text(totalPrice.toLocaleString())
    }
    totalPriceCart(productsInCart)
   
    $(".cart-number").on("keyup", function () {
       
        let number = $(this).val()
        let productId = $(this).data("id")
        const carts = productsInCart.find((item) => item.id == productId)
        carts.quantity = number
        
        renderProduct(productsInCart)
        totalPriceCart(productsInCart)
        localStorage.setItem('cart', JSON.stringify(productsInCart))
        

    })
  
    $(".up").on("click" , function(){
        const id = $(this).data("id")
        
        const newElement = productsInCart.find(item => item.id == id)
        newElement.quantity = +newElement.quantity +1
        
        renderProduct(productsInCart)
        totalPriceCart(productsInCart)      
        localStorage.setItem('cart', JSON.stringify(productsInCart)) 
        setTimeout(function(){
            window.location.href ="./cart.html"
        },1000)
    })
    $(".down").on("click" , function(){
        const id = $(this).data("id")
        const newElement = productsInCart.find(item => item.id == id)
        newElement.quantity = +newElement.quantity - 1
        
        renderProduct(productsInCart)
        totalPriceCart(productsInCart)
        localStorage.setItem('cart', JSON.stringify(productsInCart))
        setTimeout(function(){
            window.location.href ="./cart.html"
        },1000)
        
        
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
// function totalPriceCart(item) {
//     let totalPrice = 0
//     item.foEach(function(index ,elemet){
    
//         const a = $(index).text().replace(/,/g, '');
//         totalPrice += +a
//    })
//    $(".totals-price").text(totalPrice.toLocaleString())
// }

// totalPriceCart(productsInCart)


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