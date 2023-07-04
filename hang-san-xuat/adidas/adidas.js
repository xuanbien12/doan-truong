$(document).ready(function(){
    var productsInLocal = JSON.parse(localStorage.getItem('productsAdmin') || '[]')
    const newProductAdidas = productsInLocal.filter((item) => {
        if(item.brand == "adidas") {
            return true
        }
    })

  

    function rederProducts(product) {
        let newProduct = product.map((item) => {
            let price = +item.price
            let del = +item.del
            const a = item.link || "./../../product/product36.html"
            return(
                `
             <li class="product-item" data-id="${item.id}">
                                     <a href="${a}" >
                                         <span class="brand">${item.brand}</span>
                                         <img class="product-item-img" src="${item.img}" alt="">
                                         <h2 class="product-item-title">${item.name}</h2>
                                         <span class="price">
                                             <del>${del.toLocaleString()} đ</del>
                                             <span class="price-product" data-price="${price}">${price.toLocaleString()} đ</span>
                                         </span>
                                         <div class="sale">sale</div>
                                     </a>
             </li>
             `
            )
        })
     $(".products").html(newProduct)
     $(".product-item").on("click" , function(){
       
        const a = $(this).data("id")
        localStorage.setItem("id" ,JSON.stringify(a))
    })
    }
   
    rederProducts(newProductAdidas)
    $("#check").change(function () {
        if ($(this).val() === 'btn-price') {
            newProductAdidas.sort((a, b) => {
                return a.price - b.price
            })
            rederProducts(newProductAdidas)    
        }else if ($(this).val() === 'price-desc') {
            newProductAdidas.sort((a, b) => {
                return b.price - a.price
            })
            rederProducts(newProductAdidas)
        }else {
            newProductAdidas.sort((a, b) => {
                return a.id - b.id
                
            })
            rederProducts(newProductAdidas)
            
        }
    })
})