
let sub_button=document.getElementById("sub");

let fname=document.getElementById("fname");
let lname=document.getElementById("lname");
let std=document.getElementById("std");
let city=document.getElementById("city");

let tb1=document.getElementById("tb1");

let counter=101;    

sub_button.addEventListener("click",function(e){


    e.preventDefault(); 

   console.log(fname.value); 
   console.log(lname.value); 
   console.log(std.value);
   console.log(city.value); 

   let main_tr=document.createElement("tr");

   let fname_tab=document.createElement("td");
   let lname_tab=document.createElement("td");
   let std_tab=document.createElement("td");
   let city_tab=document.createElement("td");
   let stu_id=document.createElement("td");
   
   tb1.append(main_tr);

   main_tr.append(stu_id);
   main_tr.append(fname_tab); 
   main_tr.append(lname_tab); 
   main_tr.append(std_tab);
   main_tr.append(city_tab);

  

   stu_id.innerText=counter; 
   fname_tab.innerText=fname.value;
   lname_tab.innerText=lname.value;
   std_tab.innerText=std.value;
   city_tab.innerText=city.value;
   
   fname.value=null;
   lname.value=null;
   std.value=null;
   city.value=null;

   
   alert(`Record  Number := ${counter}  Successfully Added`);
   counter++;

})