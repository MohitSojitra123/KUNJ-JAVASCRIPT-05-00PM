let id1=document.getElementById("id1");
let id2=document.getElementById("id2");
let ampm="am";


function gettimes(){
     let data1=new Date();

     let h=data1.getHours();
     let m=data1.getMinutes();
     let s=data1.getSeconds();
     let da=data1.getDate();

     if(h>12){
         ampm="pm";
     }else{
          ampm="am";
     }
    

     if(h>12){
        h=h-12;
        h="0"+h; 
     }

     if(m<10){
         m="0"+m;
     }

     if(s<10){
          s="0"+s;
     }

     let randome=Math.ceil(Math.random()*1000000);
     id1.style.color="#"+randome;
     id2.style.color="#"+randome;
     id1.innerText=`${h} : ${m} : ${s}`;
     id2.innerHTML="&nbsp;&nbsp;"+ampm;

     console.log(randome);
     console.log(ampm);
     console.log(d);
  

};

setInterval(gettimes,1000);



