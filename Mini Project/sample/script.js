
// image hover ----------
function setNewImage(){
    document.getElementById("img-hover").src="/Assets/New Arrival/02.jpg";
}
function setOldImage(){
    document.getElementById("img-hover").src="/Assets/New Arrival/01.jpg";
}
// -------------------
function setNew(){
    document.getElementById("img-hover1").src="/Assets/New Arrival/01.jpg";
}
function setOld(){
    document.getElementById("img-hover1").src="/Assets/New Arrival/02.jpg";
}
// -------------------
function setNew1(){
    document.getElementById("img-hover2").src="/Assets/New Arrival/06.jpg";
}
function setOld1(){
    document.getElementById("img-hover2").src="/Assets/New Arrival/08.jpg";
}
// -------------------
function setNew2(){
    document.getElementById("img-hover3").src="/Assets/New Arrival/08.jpg";
}
function setOld2(){
    document.getElementById("img-hover3").src="/Assets/New Arrival/04.jpg";
}
// -------------------------------------------------------------------------------------



//cart

let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cartt')
let closeCart = document.querySelector('#close-cart')

//open Cart
cartIcon.onclick = () =>{
    cart.classList.add("active");
};

//remove cart
closeCart.onclick = () =>{
    cart.classList.remove("active");
};



