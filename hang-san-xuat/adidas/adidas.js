$(document).ready(function(){
    
    const newProductAdidas = product.filter((item) => {
        if(item.brand == "adidas") {
            return true
        }
    })

  

    function rederProducts() {
        let newProduct = newProductAdidas.map((item) => {
            return(
                `
             <li class="product-item">
                                     <a href="${item.link}">
                                         <span class="brand">${item.brand}</span>
                                         <img class="product-item-img" src="${item.img}" alt="">
                                         <h2 class="product-item-title">${item.name}</h2>
                                         <span class="price">
                                             <del>${item.del}</del>
                                             <span class="price-product" data-price="${item.dataPrice}">${item.price}</span>
                                         </span>
                                         <div class="sale">sale</div>
                                     </a>
             </li>
             `
            )
        })
     $(".products").html(newProduct)
    }
    rederProducts()
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