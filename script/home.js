let icon =document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");

}
//coupon//



let popupCloseButton=document.querySelector('#couponClose')
popupCloseButton.addEventListener('click',()=>{
    document.querySelector('#coupon').style.display='none';
})