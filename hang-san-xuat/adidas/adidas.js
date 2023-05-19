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
            return(
                `
             <li class="product-item">
                                     <a href="${item.link}">
                                         <span class="brand">${item.brand}</span>
                                         <img class="product-item-img" src="${item.img}" alt="">
                                         <h2 class="product-item-title">${item.name}</h2>
                                         <span class="price">
                                             <del>${del.toLocaleString()} đ</del>
                                             <span class="price-product" data-price="${price.toLocaleString()}">${price.toLocaleString()} đ</span>
                                         </span>
                                         <div class="sale">sale</div>
                                     </a>
             </li>
             `
            )
        })
     $(".products").html(newProduct)
    }
   
    rederProducts(newProductAdidas)
    $("#check").change(function () {
        if ($(this).val() === 'btn-price') {
            newProductAdidas.sort((a, b) => {
                return a.dataPrice - b.dataPrice
            })
            rederProducts()    
        }else if ($(this).val() === 'price-desc') {
            newProductAdidas.sort((a, b) => {
                return b.dataPrice - a.dataPrice
            })
            rederProducts()
        }else {
            newProductAdidas.sort((a, b) => {
                return a.id - b.id
                
            })
            rederProducts()
            
        }
        
    
    })
})