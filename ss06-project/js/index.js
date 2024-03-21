/*
taoj 1 mảng chứa danh sách sản phẩm]
quản lý product
*/
let products = JSON.parse(localStorage.getItem("products"));
function renderProduct() {
    let element = "";
    for (let i = 0; i < products.length; i++) {
        console.log(products[i]);
        element +=
            `
        <a href="#vegetables">
        <div class="categories">
            <img src="${products[i].image}" class="item-image" />

            <div class="image-tittle">${products[i].price}</div>
        </div>
    
    
        `
    }
    document.getElementsByClassName("container")[0].innerHTML = element
}
renderProduct()
function addToCart() {
    // console.log("đã gọi hàm")
    let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
    if (checkLogin == null) {
        console.log("bạn phải đăng nhập để mua hàng");
        return// gặp return dừng chương trình luôn
    }
    console.log("đi mua hàng bình thường");
}
console.log("đi mua hàng bình thường");
let users = JSON.parse(localStorage.getItem("users"));
for (let i = 0; i < users.length; i++) {
    //lấy thông tin sản phẩm để đưa vào giỏ hàng
    // làm sao để lấy thông tin sản phẩm 
    // console.log("11111",productId);
    // có id sản phẩm rồi làm sao lấy thông tin sản phẩm
    if (users[i].id == checkLogin) {
        console.log("giỏ hàng của user xẽ là ", users[i].cart);
        let product = JSON.parse(localStorage.getItem("products"))
        break;
    }
}
// trước khi vào giở hàng thì kiểm tra xem sản phẩm có trong giỏ hàng hay chưa
let index = users[i].cart.findIndex((item), index => {
    return item.id == productId
})
if (index == -1) {
    // tức là không có thêm bình thường
    console.log("chưa có");
} else {
    // có rồi đi tăng số lượng
    // mình phải biết vị trí của cái cần tăng
    console.log("có rồi");
}
// nếu có thì tăng số lượng
// nếu chưa có thì thêm bình thường
// thông tin sp
user[i].cart.push({ ...product[j], quantity: 1 });
// sau khi push xong thì đưa lên local