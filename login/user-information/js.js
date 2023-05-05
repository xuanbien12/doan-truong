$(document).ready(function(){
    let login = JSON.parse(localStorage.getItem("login" || "[]"))

    function renderUser (item) {
      let number = 0 ;
    let html = item.map(function(item){
        
        
        return`
        <tr class="list-item">
                <td class="item-inner"><a href="" class="btn-delete-inner btn-delete" data-id="${item.name}">X</a></td>
                <td class="item-inner stt">${++number}</td>
                <td class="item-inner name">${item.name}</td>
                <td class="item-inner email">${item.email}</td>
                <td class="item-inner password">${item.password}</td>
            </tr>
        `
        })
    $(".user").html(html)
    }
    renderUser(login)

    $(".btn-delete").on("click",function(){
        const userName = $(this).data("id")
        console.log(userName)
        login = login.filter((item) => item.name != userName)
        console.log(login)
        renderUser(login)
        localStorage.setItem('login', JSON.stringify(login))
    })
})