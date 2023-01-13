let btns = document.querySelectorAll(".btn");
let input = document.querySelector("input");
for(elements of btns){
    elements.addEventListener("click",(e)=>{
      
    
if(e.target.innerHTML=="="){
    input.value=eval(input.value)
    }
       
else if(e.target.innerHTML=="Clear"){
    input.value="";
    }
       
else if(e.target.innerHTML=='Delete'){
    input.value=input.value.substring(0,input.value.length-1);
    }
      
else{ input.value+=e.target.innerHTML.trim();
    } 
 })
}