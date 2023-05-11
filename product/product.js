$(document).ready(function () {
    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            $("header").addClass("site-header")
            $(".rs-navbar-b").css('display', 'none')
            $(".search").addClass("d-n")
            

        } else {
            $("header").removeClass("site-header")
            $(".rs-navbar-b").css('display', 'block')
            $(".search").removeClass("d-n")
           
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
    const textProduct = $(".prodcut-title").text()

    $(".name-tab").text(textProduct)
    $(".up").on("click", function () {
        const counter = $(".iput-nb").attr("value")
        let newcounter = (+counter) + 1
        $(".iput-nb").attr("value", newcounter)

    })
    $(".down").on("click", function () {
        const counter = $(".iput-nb").attr("value")
        let newcounter = (+counter) - 1
        if (newcounter >= 1) {

            $(".iput-nb").attr("value", newcounter)
        }

    })
    $(".active").on("click", function () {
        $(".active").css("backgroud", "black")

    })

    $('.slick-products').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: `<button type='button' class='slick-prev pull-left slick-arrow '><i class="fa-solid fa-arrow-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next pull-right slick-arrow '><i class="fa-solid fa-arrow-right"></i></button>`,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });
    $(".rp-bars-st").on("click", function () {
        $(".show-list").css("left", "0")
        $(".xmark").css("right", "0")
    })
    $(".xmark").on("click", function () {
        $(".show-list").css("left", "-100%")
    })

    $(".active").on("click", function () {
        $(".active").each(function (index) {
            $(this).removeClass("bg-active")
        })
        $(this).addClass("bg-active")
    })


    // đưa dữ liệu lên localStorage lưu trữa

    $(".add-to-cart").on("click", function () {
        var cart = JSON.parse(localStorage.getItem('cart') || '[]')
        let img = $(".inf-img-inner img").attr("src")
        let name = $(".prodcut-title").text()
        let id = $(".add-to-cart").attr("data-id")
        let price = $(".car-price").text()
        let priceNumber = $(".car-price").text().replace(/\s+/g, '')
        let size = $(".active.bg-active").text()
        let quantity = $(".iput-nb").attr("value")
        let linkProduct = $(".link-product").attr("href")
        let sp = {
            id,
            img,
            name,
            price,
            priceNumber,
            size,
            quantity,
            linkProduct,
        }
        const numberQuantity = $(".iput-nb").attr("value")
        const productId = $(this).data('id');
        const prodcutSize = $(".active.bg-active").text()
        let carts = cart.find((item) => item.id == productId && item.size == prodcutSize)

        if (carts) {
            carts.quantity = +numberQuantity + +(carts.quantity)
        } else {
            cart.push(sp)
        }

        localStorage.setItem("cart", JSON.stringify(cart))
        window.location.href = "./../cart/cart.html"
    })

    

})
