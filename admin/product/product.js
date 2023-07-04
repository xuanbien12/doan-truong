$(document).ready(function () {
    const products = JSON.parse(localStorage.getItem("productsAdmin"))

    const renderProduct = (product) => {
        const newproduct = product.map(product1 => {
            return `
            <tr class="style-td">
            <td>${product1.id}</td>
            <td>${product1.brand}</td>
            <td>${product1.name}</td>
            <td><img class="product-img" src="${product1.img}" alt=""></td>
            <td>${product1.price}</td>
            <td>${product1.del}</td>
            <td class="toolbars-user "><a href="" class="delete-user" data-id="${product1.id}"><i class="fa-solid fa-trash" ></i></a><div data-id="${product1.id}" class="edit"><i class="fa-solid fa-pen-to-square"></i></div></td>
            </tr>
            `
        })
        $("#render-product").html(newproduct)
    }

    renderProduct(products)

    $(".admin , .user").on("click", function () {
        window.location.href = "./../admin.html"
    })
    $(".add-product").on("click", function () {
        window.location.href = "./../add-product/addproduct.html"
    })
    $(".add-blog").on("click", function () {
        window.location.href = "./../add-blog/blog.html"
    })
    $(".feedback").on("click", function () {
        window.location.href = "./../feedback/feedback.html"
    })
    $(".delete-user").on("click", function () {
        var products = JSON.parse(localStorage.getItem("productsAdmin") || "[]")
        const check = $(this).data("id")

        const newproduct = products.filter(product => product.id != check)
        renderProduct(newproduct)
        localStorage.setItem("productsAdmin", JSON.stringify(newproduct))
    })


    $(".edit").on("click", function () {
        $(".edit-product").css("display", "flex")
        const id = $(this).data("id")
        const checkProduct = products.filter((item) => item.id === id)
        const productEdit = checkProduct.map(item => {

            return `
                <form id="form">
                <div class="form-inner">
                    <span>Name</span>
                    <input type="text" class="name-product  st-i" value="${item.name}" >
                </div>
                <div class="form-inner">
                    <span>Brand</span>
                    <input type="text" class="brand-product st-i" value="${item.brand}">
                </div>
                <div class="form-inner">
                    <span>Image</span>
                    <input type="text" class="img-product st-i " value="${item.img}">
                </div>
                <div class="form-inner">
                    <span>Price <br> (1000đ)</span>
                    <div class="form-inner-i">
                        <input type="text" class="price-product st-i" value="${item.price}">
                        <span class="show-monney st-show">${(+item.price).toLocaleString()} đ</span>
                    </div>
                </div>
                <div class="form-inner">
                    <span>Price del <br>(1000đ)</span>
                    <div class="form-inner-i">
                        <input type="text" class="del-product st-i" value="${item.del}">
                        <span class="show-del st-show">${(+item.del).toLocaleString()} đ</span>
                    </div>
                </div>
                <button type="submit" class="btn-edit-product"  data-id="${item.id} ">Submit</button>

            </form>

                `
        })

        $(".form-edit").html(productEdit)
        $(".price-product").on("keyup", function () {
            const value = +$(this).val()
            $(".show-monney").text("=" + " " + value.toLocaleString() + " đ")
        })
        $(".del-product").on("keyup", function () {
            const value = +$(this).val()

            $(".show-del").text("=" + " " + value.toLocaleString() + " đ")
        })
        $(".name-product").on("keyup", function () {
            const value = $(this).val()
            $(".name-product").attr("value", value)
        })
        $(".brand-product").on("keyup", function () {
            const value = $(this).val()
            $(".brand-product").attr("value", value)
        })
        $(".img-product").on("keyup", function () {
            const value = $(this).val()
            $(".img-product").attr("value", value)
        })
        $(".price-product").on("keyup", function () {
            const value = $(this).val()
            $(".price-product").attr("value", value)
        })
        $(".del-product").on("keyup", function () {
            const value = $(this).val()
            $(".del-product").attr("value", value)
        })


        $("#form").on('submit', function () {
            const name = $(".name-product").attr("value")
            const brand = $(".brand-product").attr("value")
            const img = $(".img-product").attr("value")
            const price = $(".price-product").attr("value")
            const del = $(".del-product").attr("value")
            const id = $(".btn-edit-product").data("id")
            const results = products.map(item => {
                if (item.id == id) {
                    item.name = name
                    item.brand = brand
                    item.img = img
                    
                    item.price = price
                    item.del = del
                }
                return item
            })

            localStorage.setItem("productsAdmin", JSON.stringify(results))
        })
    })

    $(".btn-hide-edit").on("click", function () {
        $(".edit-product").hide()
    })




})