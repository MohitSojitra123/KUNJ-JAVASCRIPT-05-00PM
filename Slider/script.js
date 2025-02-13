let previous_1=document.getElementsByClassName("previous_1")[0];
let next_1=document.getElementsByClassName("next_1")[0];
let bg_img=document.querySelectorAll(".bg_img");

let counter=100;

next_1.addEventListener("click",function(){
    for(i=0; i<bg_img.length; i++){
        bg_img[i].style.transform=`translatex(-${counter}%)`;
        bg_img[i].style.transition="1s";
    }
    counter+=100;
})


previous_1.addEventListener("click",function(){
    counter-=100;
    for(i=0; i<bg_img.length; i++){
        bg_img[i].style.transform=`translatex(-${counter}%)`;
        bg_img[i].style.transition="1s";
    }
})