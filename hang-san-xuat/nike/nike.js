$(document).ready(function(){
    var productsInLocal = JSON.parse(localStorage.getItem('productsAdmin') || '[]')
    const newProductNike = productsInLocal.filter((item) => {
        if(item.brand == "nike") {
            return true
        }
    })

  

    function rederProducts(product) {
        let newProductnike = product.map((item) => {
            let price = +item.price
            let del = +item.del
            const a = item.link || "./../../product/product36.html"
            // if(item.id >= 36) {
            //     localStorage.setItem("id" ,JSON.stringify(item))
            // }
            return(
                `
             <li class="product-item" data-id="${item.id}">
                                     <a href="${a}">
                                         <span class="brand">${item.brand}</span>
                                         <img class="product-item-img" src="${item.img}" alt="">
                                         <h2 class="product-item-title">${item.name}</h2>
                                         <span class="price">
                                             <del>${del.toLocaleString()} đ</del>
                                             <span class="price-product" data-price="${price}">${price.toLocaleString()}đ</span>
                                         </span>
                                         <div class="sale">sale</div>
                                     </a>
             </li>
             `
            )
        })
       
     $(".products").html(newProductnike)
     $(".product-item").on("click" , function(){
       
        const a = $(this).data("id")
        localStorage.setItem("id" ,JSON.stringify(a))
    })
    }
   

    rederProducts(newProductNike)
    $("#check").change(function () {
        if ($(this).val() === 'btn-price') {
            newProductNike.sort((a, b) => {
                return a.price - b.price
            })
            rederProducts(newProductNike)    
        }else if ($(this).val() === 'price-desc') {
            newProductNike.sort((a, b) => {
                return b.price - a.price
            })
            rederProducts(newProductNike)
        }else {
            newProductNike.sort((a, b) => {
                return a.id - b.id
                
            })
            rederProducts(newProductNike)
            
        }
        
    
    })
})