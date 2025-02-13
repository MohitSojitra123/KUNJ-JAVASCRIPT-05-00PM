let input_btn=document.getElementsByClassName("input_btn")[0];
let user_input=document.getElementsByClassName("user_input")[0];
let todo_task=document.getElementsByClassName("todo_task")[0];
let del_1=document.getElementsByClassName("del_1");  
let pen_1=document.getElementsByClassName("pen_1");  

let counter=0;

input_btn.addEventListener("click",function(){
    
    let task_con=document.createElement("div");
    task_con.setAttribute("class","task_con");
    todo_task.append(task_con);

    let div_1=document.createElement("div");
    let div_2=document.createElement("div");

    task_con.append(div_1);
    task_con.append(div_2);
    
    div_1.innerText=user_input.value;
    div_2.setAttribute("class","menu_iocn");

    let div_3=document.createElement("div_3");
    let div_4=document.createElement("div_4");

    
    div_3.setAttribute("class","pen_1");
    div_4.setAttribute("class","del_1");
  
    div_3.innerHTML=`<i class="ri-pencil-fill"></i>&nbsp;&nbsp;&nbsp;`
    div_4.innerHTML=`<i class="ri-delete-bin-6-fill"></i>`

    div_2.append(div_3);
    div_2.append(div_4);
    
    document.getElementsByClassName("user_input")[0].value=null;

    del_1[counter].addEventListener("click",function(){
        task_con.remove();
    })

    pen_1[counter].addEventListener("click",function(){
        let edit=div_1.innerText;
        user_input.value=edit;
          
    })
    counter++;
});


   


