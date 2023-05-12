$(document).ready(function(){
    
    const newProductAsics = product.filter((item) => {
        if(item.brand == "asics") {
            return true
        }
    })

  

    function rederProducts() {
        let newProduct = newProductAsics.map((item) => {
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
            newProductAsics.sort((a, b) => {
                return a.dataPrice - b.dataPrice
            })
            rederProducts()    
        }else if ($(this).val() === 'price-desc') {
            newProductAsics.sort((a, b) => {
                return b.dataPrice - a.dataPrice
            })
            rederProducts()
        }else {
            newProductAsics.sort((a, b) => {
                return a.id - b.id
                
            })
            rederProducts()
            
        }
        
    
    })
})