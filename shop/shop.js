
$(document).ready(function () {
    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            $("header").addClass("site-header")
            $(".rs-navbar-b").css('display', 'none')
            $(".search").addClass("d-n")
            $(".rs-contact").hide()
        } else {
            $("header").removeClass("site-header")
            $(".rs-navbar-b").css('display', 'block')
            $(".search").removeClass("d-n")
            $(".rs-contact").show()
        }
    });

    $(".toggle1").on("click", function () {
        $(".toggle1-perform").toggle()
    })
    $(".toggle2").on("click", function () {
        $(".toggle2-perform").toggle()
    })
    $(".toggle3").on("click", function () {
        $(".toggle3-perform").toggle()
    })
    $(".toggle4").on("click", function () {
        $(".toggle4-perform").toggle()
    })
    $(".toggle5").on("click", function () {
        $(".toggle5-perform").toggle()
    })
    $(".rp-bars-st").on("click", function () {
        $(".show-list").css("left", "0")
        $(".xmark").css("right", "0")
    })
    $(".xmark").on("click", function () {
        $(".show-list").css("left", "-100%")
    })

  
    let newProduct = []
    product.map((item) => {
        newProduct.push(
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
    function ascending() {
        let newProduct = product.map((item) => {
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
    $("#check").change(function () {
        if ($(this).val() === 'btn-price') {
            product.sort((a, b) => {
                return a.dataPrice - b.dataPrice
            })
            ascending()    
        }else if ($(this).val() === 'price-desc') {
            product.sort((a, b) => {
                return b.dataPrice - a.dataPrice
            })
            ascending()
        }else {
            product.sort((a, b) => {
                return a.id - b.id
                
            })
            ascending()
            
        }
        

    })











})