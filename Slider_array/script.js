let pre_btn=document.getElementsByClassName("pre_btn")[0];
let next_btn=document.getElementsByClassName("next_btn")[0];
let img_1=document.getElementById("img_1");

let img_path=["./photo/img1.jpg","./photo/img2.jpg","./photo/img3.jpg","./photo/img4.jpg","./photo/img5.jpg","./photo/img6.jpg","./photo/img7.jpg","./photo/img8.jpg"];

let counter=0;

function update(){
    img_1.src=img_path[counter];
}

next_btn.addEventListener("click",function(){
    counter=(counter+1)%img_path.length;
    update();
});

pre_btn.addEventListener("click",function(){
    counter=(counter-1+img_path.length)%img_path.length;
    update();
});

update();   
