let input = document.querySelector("input");
let button = document.querySelector("button");
let ol = document.querySelector("ol");
let li = document.querySelector("li");
let del_btns = document.querySelectorAll(".delete_btns"); 
let i = document.querySelector("i");

button.addEventListener("click",() =>{
       ol.innerHTML = `${ol.innerHTML}<li>${input.value} &nbsp; <button class="delete_btns"><i class="fa-solid fa-trash"></i></button></li>`;
       input.value = "";
});


    ol.addEventListener("click",(event) =>{
        if(event.target.nodeName == "I"){
            let item = event.target.parentElement.parentElement;
            item.remove();
        }
          if(event.target.nodeName == "BUTTON"){
            let item = event.target.parentElement;
            item.remove();
        }
    });
